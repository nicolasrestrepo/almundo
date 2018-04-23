import React, { Component } from 'react'
import firebase from 'firebase'
import {
    Row,
    Col,
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    DropdownButton,
    MenuItem,
    Panel,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap'
import { toast } from 'react-toastify'
import api from '../../../utils/api'
import './FormHotel.global.scss'
import { CometSpinLoader } from 'react-css-loaders';
const svgs = require.context('../../../assets/icons/amenities', true, /\.svg$/)

class FormHotel extends Component {
    constructor() {
        super()
        this.state = {
            file: '',
            imagePreview: '',
            amenititesKeys: [],
            sendLoading: false,
            hotel: {
                name: '',
                price: '',
                stars: null,
                amenities: [],
            }

        }
    }

    componentWillMount() {
        const keys = svgs.keys()
        this.setState({
            amenititesKeys: keys
        })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            hotel: {
                ...this.state.hotel,
                [event.target.name]: event.target.value
            }

        })
    }

    handleStars = (eventkey) => {
        this.setState({
            ...this.state,
            hotel: {
                ...this.state.hotel,
                stars: eventkey
            }

        })
    }
    handleAmenities = (amenitie, action) => {
        const { amenities } = this.state.hotel
        if (amenities.indexOf(amenitie) >= 0 && action === 'add') {
            toast.error("this amenity has already been selected", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            // immutable state with concat and filter
            this.setState({
                ...this.state,
                hotel: {
                    ...this.state.hotel,
                    amenities: action === 'add' ?
                        amenities.concat(amenitie)
                        :
                        amenities.filter(item => item !== amenitie)
                }

            })
        }

    }

    handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreview: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    handleSaveHotel =  async() => {
        const { hotel, file } = this.state
        if(!file){
            toast.error("image hotel is required", {
                position: toast.POSITION.TOP_RIGHT
            });
        }else{
            try {
                this.setState({...this.state, sendLoading: true})
                const storageRef = await firebase.storage().ref(`/hotels/${file.name}`)
                const taskUpload = await storageRef.put(file)
                const addHotel= await api.hotel.AddHotel({
                    name: hotel.name,
                    price: hotel.price,
                    stars: hotel.stars,
                    image: taskUpload.downloadURL,
                    amenities: hotel.amenities
                })
                if(addHotel.status === 500){
                    this.setState({...this.state, sendLoading: false})
                    toast.error(addHotel.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }else{
                    toast.success("Hotel saved successfully", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    this.setState({
                        ...this.state,
                        file: '',
                        imagePreview: '',
                        sendLoading: false,
                        hotel: {
                            name: '',
                            price: '',
                            stars: null,
                            amenities: [],
                        }
                    })
                }
            } catch (error) {
                toast.error("Error saved hotel, please try again", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
    
        }

    }

    render() {
        const { imagePreview, amenititesKeys, sendLoading } = this.state
        const { amenities, stars } = this.state.hotel
        return (
            <Row id="form-hotel">
                <Col xs={12} sm={8} smOffset={2} className="text-center">
                    <Row>
                        <Col xs={12}>
                            {!imagePreview ?
                                <i className="far fa-image" /> :
                                <img src={imagePreview} alt="hotel" width="300px" />
                            }
                        </Col>
                        <Col xs={12}>
                            <label className="btn btn-primary btn-file">
                                Upload hotel image <i className="fas fa-upload" /> <input
                                    type="file"
                                    onChange={(e) => this.handleImageChange(e)} />
                            </label>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={10} smOffset={1}>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <Row>
                                <Col xs={12} sm={8} smOffset={2} >
                                    <ControlLabel>Hotel name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="name"
                                        value={this.state.hotel.name}
                                        placeholder="Hotel name"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                                <Col xs={12} sm={5} smOffset={2}>
                                    <ControlLabel>Price per night</ControlLabel>
                                    <FormControl
                                        type="number"
                                        name="price"
                                        value={this.state.hotel.price}
                                        placeholder="price for night"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                                <Col xs={12} sm={4}>
                                    <ControlLabel>Hotel Stars</ControlLabel>
                                    <br />
                                    <DropdownButton
                                        bsStyle="default"
                                        title={!stars ? 'select stars' : `${stars} stars`}
                                        onSelect={this.handleStars}
                                        id="stars"
                                    >
                                        <MenuItem eventKey="1">1</MenuItem>
                                        <MenuItem eventKey="2">2</MenuItem>
                                        <MenuItem eventKey="3">3</MenuItem>
                                        <MenuItem eventKey="4">4</MenuItem>
                                        <MenuItem eventKey="5">5</MenuItem>
                                    </DropdownButton>

                                </Col>
                                <Col xs={12} sm={8} smOffset={2}>
                                    <h5>Select hotel amenities</h5>
                                    <Panel className="amenities-select">
                                        <Row>
                                            {amenities.map((name, i) => (
                                                <Col key={i} xs={3} sm={3} className="amenitie-item">
                                                    <ul className="list-inline">
                                                        <li>
                                                            <img src={svgs(`./${name}.svg`)}
                                                                alt="amenitie" width="25px" />
                                                        </li>
                                                        <li>
                                                            <Button
                                                                className="delete-amenitie"
                                                                onClick={() => this.handleAmenities(name, 'delete')}
                                                            >
                                                                <i className="fas fa-times" />
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Panel>
                                    <ListGroup className="text-center">
                                        {amenititesKeys.map((key, index) => {
                                            let name = key.replace('./', '').replace('.svg', '')
                                            return (
                                                <ListGroupItem
                                                    key={index}
                                                    onClick={() => this.handleAmenities(name, 'add')}>
                                                    <Row>
                                                        <Col xs={12} sm={2}>
                                                            <img src={svgs(key)} alt="amenitie" width="25px" />
                                                        </Col>
                                                        <Col xs={12} sm={8}>
                                                            <h5>{name}</h5>
                                                        </Col>
                                                    </Row>
                                                </ListGroupItem>
                                            )
                                        }
                                        )}
                                    </ListGroup>
                                </Col>
                                <Col xs={12} sm={8} smOffset={2}
                                className="text-center"
                                >
                                    
                                {!sendLoading ?  <Button
                                    bsStyle="success"
                                    onClick={this.handleSaveHotel}>     
                                    Save Hotel  
                            </Button> : 
                                <CometSpinLoader color="#d36e1b" size="10"/>}
                                </Col>
                            </Row>
                        </FormGroup>

                    </form>
                </Col>
            </Row>
        )
    }
}


export default FormHotel

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import HotelCard from '../../components/HotelCard'
import Filter from '../../components/Filter'
import { toast } from 'react-toastify'
import { CometSpinLoader } from 'react-css-loaders';
import './Home.global.scss'
//utils
import api from '../../utils/api'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hotels: [],
            loading: true
        }
    }
    componentWillMount() {
        this.getHotels()
    }
    getHotels = async () => {
        try {
            const res = await api.hotel.getAllHotels()
            if (res.status === 500) {
                toast.error("Error al cargar los hoteles intenta nuevamente", {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                this.setState({
                    hotels: res.data.hotels,
                    loading: false
                })
            }
        } catch (e) {
            toast.error("Error al cargar los hoteles intenta nuevamente", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
    render() {
        const { hotels, loader } = this.state
        const { nameFilter, starsFilter, filterBy } = this.props
        
        const filterByName = (
            hotels.filter(hotel => hotel.name.toLowerCase().search(nameFilter) !== -1)
                .map(hotel => (
                    <HotelCard key={hotel.id} {...hotel} />
                ))
        )

        const filterByStars = (
            hotels.filter(hotel => {
                let hotel1 = ''
                Object.keys(starsFilter)
                .map(key => {
                        if(starsFilter[key]){                 
                            if(hotel.stars == key){
                                hotel1 = hotel
                            }
                        }
                    })
                return hotel1 === hotel
            }).map(hotel => (
                <HotelCard key={hotel.id} {...hotel} />
            ))
        )
        if (loader) {
            return (
                <div id="home">
                    <Grid fluid>
                        <Row>
                            <Col xs={12} className="text-center">
                                <CometSpinLoader color="#d36e1b" />
                                <br />
                                <h2>Cargardo hoteles</h2>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            )
        }
        return (
            <div id="home">
                <Grid fluid>

                    <Row>
                        <Col sm={3} className="filter">
                            <Filter />
                        </Col>
                        <Col sm={9} className="hotels">
                            {filterBy === 'name' ? filterByName : filterByStars}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

Home.defaultProps = {
    nameFilter: "hotel",
    starsFilter: {
        1:false,
        2:false,
        3:false,
        4:false,
        5:false
    }
}

Home.propTypes = {
     nameFilter: PropTypes.sting,
     starsFilter: PropTypes.objectOf(PropTypes.bool), 
     filterBy: PropTypes.string
}
const mapStateToProps = (state) => ({
    nameFilter: state.nameFilter,
    starsFilter: state.starsFilter,
    filterBy: state.filterBy
})
export default connect(mapStateToProps)(Home)
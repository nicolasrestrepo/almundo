import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Panel,
    Form,
    FormGroup,
    FormControl,
    Button,
    Checkbox
} from 'react-bootstrap'
import searchIcon from '../../../assets/icons/filters/search.svg'
import starBlue from '../../../assets/icons/filters/starBlue.svg'
import Stars from '../../Stars'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../../../redux/actions'
import Filter from '..';


class Filters extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameHotel: '',
        }
    }
    handleChange = (event) =>{
        this.setState({
            ...this.state,
            nameHotel: event.target.value
        })
    }

    hangleSendNameHotel = () => {
        this.props.addNameHotel(this.state.nameHotel)
    }

    handleToggleCheck = (number) => {
        const status = this.props.starsFilter[number]
        this.props.addStars(number, !status)
    }
render(){
    const  {starsFilter} = this.props
    return (
        <React.Fragment>
            <Panel id="filter-1" defaultExpanded>
                <Panel.Heading>
                    <Panel.Title toggle className="title-grid">
                        <div className="icon">
                            <img src={searchIcon} alt="search" width="20px" /> 
                        </div>
                        <div className="name"> 
                            nombre del hotel
                        </div>
                        <div className="carret">
                            <i className="fas fa-sort-up" />
                        </div>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        <Form inline>
                            <FormGroup controlId="formInlineEmail">
                                <FormControl 
                                    type="text" 
                                    name="nameHotel"
                                    onChange={this.handleChange}
                                    placeholder="nombre del hotel" />
                            </FormGroup>{' '}
                            <Button 
                                onClick={this.hangleSendNameHotel}
                            >Buscar</Button>
                        </Form>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>

            <Panel id="filter-2" defaultExpanded>
                <Panel.Heading>
                    <Panel.Title toggle className="title-grid"> 
                    <div className="icon">
                        <img src={starBlue} alt="search" width="20px" />
                    </div>
                    <div className="name">
                        Estrellas
                     </div>
                    <div className="carret">
                        <i className="fas fa-sort-up" />
                    </div>            
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        <Checkbox 
                            onClick={() => this.props.removeStars()}
                        >
                            Todas la estrellas
                        </Checkbox>
                        <Checkbox 
                            onClick={() => this.handleToggleCheck(5)}
                            checked={starsFilter[5]}
                        >
                            <Stars quantity={5} width="17px"/>
                        </Checkbox>
                        <Checkbox 
                            onClick={() => this.handleToggleCheck(4)}
                            checked={starsFilter[4]}
                        >
                            <Stars quantity={4} width="17px"/>
                        </Checkbox>
                        <Checkbox 
                            onClick={() => this.handleToggleCheck(3)}
                            checked={starsFilter[3]}
                        >
                            <Stars quantity={3} width="17px"/>
                        </Checkbox>
                        <Checkbox 
                            onClick={() => this.handleToggleCheck(2)}
                            checked={starsFilter[2]}
                        >
                            <Stars quantity={2} width="17px"/>
                        </Checkbox>
                        <Checkbox
                            onClick={() => this.handleToggleCheck(1)}
                            checked={starsFilter[1]}
                        >
                            <Stars quantity={1} width="17px"/>
                        </Checkbox>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        </React.Fragment>
    )
}
 
}
Filters.defaultProps = {
    addNameHotel: () => {},
    addStars: () => {},
    removeStars: () => {},
    starsFilter: {
        1:false,
        2:false,
        3:false,
        4:false,
        5:false
    }
}
Filters.propTypes = {
    addNameHotel: PropTypes.func,
    addStars: PropTypes.func,
    removeStars: PropTypes.func,
    starsFilter: PropTypes.objectOf(PropTypes.bool)
}

const mapDispatchToProps = (dispatch) => ({
    addStars: bindActionCreators(action.addStarsByFilter, dispatch),
    removeStars: bindActionCreators(action.removeStarsFilter, dispatch),
    addNameHotel: bindActionCreators(action.filterByName, dispatch)

})

const mapStateToProps = (state) => ({
    starsFilter: state.starsFilter
})
export default connect(mapStateToProps, mapDispatchToProps)(Filters)
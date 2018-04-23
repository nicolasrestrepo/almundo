import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Well } from 'react-bootstrap'
import Stars from '../Stars'


import './HotelCard.global.scss'

const svgs = require.context('../../assets/icons/amenities', true, /\.svg$/)

function HotelCard(props) {
    return (
        <Row>
            <Col xs={12} className="hotel-card">
                <Well>
                    <Row>
                        <Col xs={12} sm={4} >
                            <img src={props.image}
                                className="img-responsive"
                                alt="hotel" />
                        </Col>
                        <Col xs={12} sm={5}>
                            <div className="description">
                                <h4>{props.name}</h4>
                                 <Stars quantity={props.stars} width="20px"/>
                                <ul className="list-inline">
                                    <ul className="list-inline">
                                        {props.amenities.map((name, index) => (
                                            <li key={index}>
                                                <img src={svgs(`./${name}.svg`)}
                                                    alt="amenitie" width="20px" />
                                            </li>
                                        ))}
                                    </ul>
                                </ul>
                                <div className="stars">
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={3} className="text-center price">

                            <p>
                                <small>
                                    Precio por noche por habitación
                                </small>
                            </p>
                            <div className="arg-price">
                                <h3> ARG </h3> <h1>{props.price}</h1>
                            </div>


                            <Button bsStyle="primary">
                                Ver Hotel
                            </Button>
                        </Col>
                    </Row>

                </Well>
            </Col>
        </Row>
    )
}
HotelCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    stars: PropTypes.number,
    amenities: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number
}
export default HotelCard
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import alMundoLogo from '../../assets/images/logo-almundo.svg'

import './Header.global.scss'
function Header() {
    return (
        <div id="header">
            <header>
                <Row>
                    <Col xs={12} sm={8}>
                        <img src={alMundoLogo} alt="logo al mundo" />
                    </Col>
                    <Col xs={12} sm={2} className="admin text-center">
                        <Link to="/admin-hotels">
                            agregar hoteles
                    </Link>
                    </Col>
                    <Col xs={12} sm={2} className="home text-center">
                        <Link to="/">
                            lista de hoteles
                    </Link>
                    </Col>
                </Row>
            </header>
        </div>
    )
}

export default Header
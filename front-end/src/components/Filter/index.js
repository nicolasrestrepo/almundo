import React from 'react'
import {
    Row,
    Col,
    Panel,
    Well
} from 'react-bootstrap'

import Filters from './fragments/filters'
import './Filter.global.scss'
function Filter() {
    return (
        <div id="filter">
            <Row >
                <Col xs={12} className="visible-xs filter-min">
                    <Panel defaultExpanded>
                        <Panel.Heading>
                            <Panel.Title toggle className="text-center title-container">
                                <div className="name">
                                    Filtrar 
                                </div>
                                <div className="carret"> 
                                    <i className="fas fa-sort-up" />
                                </div>
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <Filters />
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                </Col>
                <div className="hidden-xs filter-max">
                    <Col sm={12}>
                        <Well>
                            <h4>Filtros</h4>
                        </Well>
                    </Col>
                    <Col sm={12}>
                        <Filters />
                    </Col>
                </div>
            </Row>
        </div>
    )

}

export default Filter




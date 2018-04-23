import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import FormHotel from './containers/FormHotel'
function AdminHotels(){
    return (
        <Grid fluid>
            <Col xs={12} sm={10} smOffset={1}>
                <FormHotel />
            </Col>
        </Grid>
    )
}

export default AdminHotels
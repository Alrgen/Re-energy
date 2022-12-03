import React from 'react'
import { Link } from 'react-router-dom';

import { Card, Button, Col } from 'react-bootstrap';
import { linkStyle } from '../app/styles';

const Item = (props) => {
    const data = props.greeting;

    return (
      <Col className='col-3'>
        <Card>
          <Card.Img variant="top" src={data.image} height="250"/>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Subtitle style={{ marginBottom: 20}}>${data.price} USD</Card.Subtitle>
            <Link to={`/item/${data.id}`} style={linkStyle}><Button variant="dark">Ver Detalles</Button></Link>
          </Card.Body>
        </Card> 
      </Col>
    )
}

export default Item
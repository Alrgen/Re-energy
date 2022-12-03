import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

import { useCartContext } from '../context/CartContext';
import { Card, Button } from 'react-bootstrap';
import { linkStyle } from '../app/styles';

const ItemDetail = (props) => {

  const [addToCart, setAddToCart] = useState(false);
  const [ammount, setAmmount] = useState(0);

  const { addItem } = useCartContext();

  const data = props.greeting;
  
  const getAmmount = (value) => {
    setAmmount(value);
  }
 
  const showCounter = () => {
    return (
      <div>
        <ItemCount greeting={data.stock} getAmmount={getAmmount}></ItemCount>
        <Button variant='dark' onClick={() => {
          if (ammount > 0) {
            setAddToCart(true);
            addItem({id: data.id, name: data.name, price: data.price, cuantity: ammount});
          }
          }}>
            Añadir al Carrito
          </Button>
      </div>
    )
  }

  const showConfirmButton = () => {
    return (
      <Link to={'/cart'} style={linkStyle}> 
        <Button variant='dark'> Ir al carrito </Button>
      </Link>
    )
  }

  return (
    <Card className='col-4'>
      <Card.Img variant='top' src={data.image} height="500"/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.info}</Card.Text>
        <Card.Subtitle style={{ marginBottom: 20}}>${data.price} USD</Card.Subtitle>

        {addToCart ? showConfirmButton() : showCounter()}

      </Card.Body>
    </Card>
  )
}

export default ItemDetail

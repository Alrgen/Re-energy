import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

import { useCartContext } from '../context/CartContext';

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
        <button onClick={() => {setAddToCart(true); addItem({id: data.id, name: data.name, price: data.price, cuantity: ammount});}}>Añadir al Carrito</button>
      </div>
    )
  }

  const showConfirmButton = () => {
    return (
      <div>  
        <Link to={'/cart'}><button>Ir al carrito</button></Link>
      </div>
    )
  }

  return (
    <div>
      <div className='item'>
        <div className='item-body'>
        <img src={data.image} alt="" />
            <div className='item-description'>
                <h1 className='item-tittle'>{data.name}</h1>
                <h1 className='item-tittle'>Precio: {data.price} USD</h1>       
            </div>
        </div>
        {addToCart ? showConfirmButton() : showCounter()}

        
      </div>
    </div>
  )
}

export default ItemDetail
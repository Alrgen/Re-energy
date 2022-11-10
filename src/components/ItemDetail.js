import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {

  const data = props.greeting;


  //<img src={require(`../assets/${data.image}`)} alt="" />
  return (
    <div>
      <div className='item'>
        <div className='item-body'>
        
            <div className='item-description'>
                <h1 className='item-tittle'>{data.name}</h1>
                <h1 className='item-tittle'>Precio: {data.price} USD</h1>       
            </div>
        </div>
        <ItemCount greeting={data.stock}></ItemCount>
        <button>Añadir al Carrito</button>
    </div>
    </div>
  )
}

export default ItemDetail
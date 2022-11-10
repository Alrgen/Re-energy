import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/products'
import Item from './Item';

const ItemList = (props) => {
  
  const products = props.greeting;


  return (
    <div>
      {
        products.map((data, id) => <li key={"item"+id}><Item greeting={data}/></li>)
      }
    </div>
  )
}

export default ItemList
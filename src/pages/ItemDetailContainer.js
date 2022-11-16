
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail'
import {getProducts, getSingleProduct} from '../services/products';


const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({});
  const {itemId} = useParams();

  useEffect(() => {
    getSingleProduct(itemId).then(itemData => {
      setTimeout(() => {
        console.log(itemData);
        setProduct(itemData);
      }, 0);
    })
  })
  

  return (
    <div>
      <button><Link to={`/products/${product.category}`}>Volver</Link></button>
      <ItemDetail greeting={product}/>
    </div>
  )
}

export default ItemDetailContainer
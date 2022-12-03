import { useEffect } from 'react';
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail'
import {getItemById} from '../app/api';

import { Button } from 'react-bootstrap';
import { linkStyle } from '../app/styles';


const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({});
  const {itemId} = useParams();

  useEffect(() => {
    getItemById(itemId).then(item => setProduct({...item, id:itemId}));
  }, [])
  

  return (
    <div>
      <Link to={`/products/${product.category}`} style={linkStyle}><Button variant='dark'>Volver</Button></Link>
      <div className='d-flex justify-content-center'>

        
        <ItemDetail greeting={product}/>

      </div>
    </div>
  )
}

export default ItemDetailContainer
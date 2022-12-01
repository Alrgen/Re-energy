import { useEffect } from 'react';
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail'
import {getItemById} from '../app/api';


const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({});
  const {itemId} = useParams();

  useEffect(() => {
    getItemById(itemId).then(item => setProduct({...item, id:itemId}));
  }, [])
  

  return (
    <div>
      <button><Link to={`/products/${product.category}`}>Volver</Link></button>

      
      <ItemDetail greeting={product}/>

    </div>
  )
}

export default ItemDetailContainer
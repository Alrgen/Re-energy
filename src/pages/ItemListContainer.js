import ItemList from "../components/ItemList";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getItemsByCondition } from "../app/api";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    
    useEffect(() => {
      getItemsByCondition(categoryId).then(items => setProducts(items));
    }, [categoryId]);
    
    return (
      <div>
        <ItemList greeting={products}/>
      </div>
    )
  }

export default ItemListContainer;
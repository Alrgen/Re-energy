import ItemList from "../components/ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import {useState, useEffect} from 'react';
import {getProducts} from '../services/products';
import { useParams, Link } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    
    useEffect(() => {
      getProducts()
      .then((res) => {
        if (categoryId){
          setProducts(res.filter((item) => item.category === categoryId));
        }else{
          setProducts(res);
        }
      })
    }, [categoryId]);
    
    return (
      <div>
            <ItemList greeting={products}/>
        </div>
    )
  }

export default ItemListContainer;
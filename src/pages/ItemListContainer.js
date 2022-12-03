import ItemList from "../components/ItemList";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getItemsByCondition } from "../app/api";
import { Row } from "react-bootstrap";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    
    useEffect(() => {
      getItemsByCondition(categoryId).then(items => setProducts(items));
    }, [categoryId]);
    
    return (
      <div className="container text-center ">
        <Row>
         <ItemList greeting={products}/>
        </Row>
      </div>
    )
  }

export default ItemListContainer;
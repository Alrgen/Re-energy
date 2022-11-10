import ItemList from "../components/ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import {useState} from 'react';
import {getProducts} from '../services/products';
import { useParams, Link } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFilter, setProductsFilter] = useState([]);

    const {categoryId} = useParams();
    
    getProducts().then(data => {
      setTimeout(() => {
        setProducts(data);
        categoryFilter();
      }, 0)
    });

    const categoryFilter = () => {
      let items = [];

      products.forEach(product => {
        if (product.category == categoryId || categoryId == "all"){
          items.push(product);
        }
      });

      setProductsFilter(items);
    }
    
    return (
        <div>
            <button><Link to="/products/solar">Paneles Solares</Link></button>
            <button><Link to="/products/batery">Baterias</Link></button>
            <button><Link to="/products/all">Reiniciar</Link></button>
            <ItemList greeting={productsFilter}/>
        </div>
    )
}
export default ItemListContainer;
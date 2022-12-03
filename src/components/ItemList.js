import Item from './Item';

const ItemList = (props) => {
  
  const products = props.greeting;

  return (
    products.map((data, id) => <Item greeting={data}/>)
  )
}

export default ItemList
//    

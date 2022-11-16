import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {
    const data = props.greeting;

  return (
    <div className='item'>
        <div className='item-body'>
            <img src={data.image} alt="" />
            <div className='item-description'>
                <h1 className='item-tittle'>{data.name}</h1>
            </div>
        </div>
        <button><Link to={`/item/${data.id}`}>Detalle</Link></button>
    </div>
  )
}

export default Item
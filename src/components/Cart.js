import React from 'react'
import { useState, useEffect } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartState, removeItem, clear } = useCartContext();
    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(() => {
      setTotalPrice(() => {
        let total = 0;
        cartState.forEach(e => {
            total += e.price * e.cuantity;
        });
        return total;
      })
    
    }, [cartState])
    

  return (
    <div>
        Carrito
        {
            cartState.map((e, id) => 
                <li key={"item"+id}>
                    <span> producto: {e.name} | cantidad: {e.cuantity} </span>
                    <span> Precio: {e.price * e.cuantity}</span>
                    <button onClick={() => removeItem(e)}>Remover</button>
                </li>
            )
        }
        
        {cartState.length > 0 ? 
        <div>
            <h2>Precio total: {totalPrice}</h2>
            <button onClick={() => clear()}>Remover Todo</button>
        </div> 
        :
        <div>
            <h2>El carrito esta vacio! <Link to={'/'}><button>Volver al inicio</button></Link></h2>
        </div>
        }

    </div>
  )
}

export default Cart
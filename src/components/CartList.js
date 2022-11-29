import React from 'react'
import { useCartContext } from '../context/CartContext'

const CartList = () => {
    const { cartState, removeItem, clear } = useCartContext();

  return (
    <div>
        Carrito
        {
            cartState.map((e, id) => 
                <li key={"item"+id}>
                    <span> producto: {e.name} | cantidad: {e.cuantity} </span>
                    <button onClick={() => removeItem(e)}>Remover</button>
                </li>
            )
        }
        <button onClick={() => clear()}>Remover Todo</button>
    </div>
  )
}

export default CartList
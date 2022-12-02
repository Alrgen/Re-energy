import React from 'react'
import { useState, useEffect } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { createOrder } from '../app/api';

const Cart = () => {
    const { cartState, removeItem, clear } = useCartContext();
    const [ totalPrice, setTotalPrice ] = useState(0);

    const [ orderName, setOrderName ] = useState('');
    const [ orderMailAddress, setOrderMailAddress ] = useState('');
    const [ orderPhoneNumber, setOrderPhoneNumber ] = useState('');

    const [ isBuyEnd, setIsBuyEnd ] = useState(false);  

    useEffect(() => {
      setTotalPrice(() => {
        let total = 0;
        cartState.forEach(e => {
            total += e.price * e.cuantity;
        });
        return total;
      })
    
    }, [cartState])

    const saveOrder = () => {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

      if (orderName != '' && orderMailAddress != '' && orderPhoneNumber != ''){
        createOrder({buyer:{name:orderName, mail:orderMailAddress, phone:orderPhoneNumber}, items:cartState, date:date, total:totalPrice});
        setIsBuyEnd(true);
        clear();
      }
    }


    const itemsList = () => {
      return(
        cartState.map((e, id) => 
        <li key={"item"+id}>
            <span> producto: {e.name} | cantidad: {e.cuantity} </span>
            <span> Precio: {e.price * e.cuantity}</span>
            <button onClick={() => removeItem(e)}>Remover</button>
        </li>
        )
      )
    }

    const clientForm = () => {
      return (
        <div>
          <h1>Ingrese sus datos para finalizar la compra:</h1>
        <label htmlFor="">
                <input type="text" placeholder='Nombre' value={orderName} onChange={(event) => {setOrderName(event.target.value)}}/>
              </label>
              <label htmlFor="">
                <input type="mail" placeholder='Correo Electronico' value={orderMailAddress} onChange={(event) => {setOrderMailAddress(event.target.value)}}/>
              </label>
              <label htmlFor="">
                <input type="number" placeholder='Telefono' value={orderPhoneNumber} onChange={(event) => {setOrderPhoneNumber(event.target.value)}}/>
              </label>
            <button onClick={() => {saveOrder()}} type="submit">Finalizar Compra</button>
        </div>
      )
    }

    const endBuyMessage = () => {
      return (
        <div>
          <h1>Gracias por su compra {orderName}.</h1>
          <h2>Recibira un correo a {orderMailAddress} con los detalles de la compra.</h2>
        </div>
      )
    }

  return (
    <div>
        Carrito
        {itemsList()}
        
        {
        isBuyEnd ? 

          endBuyMessage()

        :
        
          cartState.length > 0 ? 
            <div>
                <h2>Precio total: {totalPrice}</h2>
                <button onClick={() => clear()}>Remover Todo</button>

                {clientForm()}
                <button onClick={() => {saveOrder()}} type="submit">Finalizar Compra</button>
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
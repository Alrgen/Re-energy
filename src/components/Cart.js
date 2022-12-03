import React from 'react'
import { useState, useEffect } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { createOrder } from '../app/api';
import { Button, Table } from 'react-bootstrap';
import { linkStyle } from '../app/styles';

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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            cartState.map((e, id) => 
                <tr>
                  <td>{e.name}</td>
                  <td>{e.cuantity}</td>
                  <td>${e.price * e.cuantity} USD</td>
                  <td><Button variant='dark' onClick={() => removeItem(e)}>Remover</Button></td>
                </tr>
            )
          }
          <tr>
              <td colSpan={3}><h3>Precio final: ${totalPrice} USD</h3></td>
              <td><Button variant='warning' onClick={() => clear()}>Remover Todo</Button></td>
          </tr>
        </tbody>
        </Table>
      )
    }

    const clientForm = () => {
      return (
        <div>
          <h1>Ingrese sus datos para finalizar la compra:</h1>

          <form>
              <div className='form-group' style={{marginBottom: 15}}>
                <label for="nameInput">Nombre</label>
                <input type="text" className='form-control' id="nameInput" placeholder='Nombre completo' value={orderName} onChange={(event) => {setOrderName(event.target.value)}}></input>
              </div>
              <div className='form-group' style={{marginBottom: 15}}>
                <label for="emailInput">Correo Electrónico</label>
                <input type="email" className='form-control' id="emailInput" placeholder='Correo Electrónico' value={orderMailAddress} onChange={(event) => {setOrderMailAddress(event.target.value)}}></input>
              </div>
              <div className='form-group' style={{marginBottom: 15}}>
                <label for="phoneInput">Télefono</label>
                <input type="text" className='form-control' id="phoneInput" placeholder='Número de télefono' value={orderPhoneNumber} onChange={(event) => {setOrderPhoneNumber(event.target.value)}}></input>
              </div>
          </form>
        </div>
      )
    }


    const endBuyMessage = () => {
      return (
        <div>
          <h1>Gracias por su compra {orderName}.</h1>
          <h2>Recibira un correo a {orderMailAddress} con los detalles de la compra.</h2>

          <Button variant='dark'><Link to="/" style={linkStyle}>Volver al Inicio</Link></Button>
        </div>
      )
    }

  return (
    <div>
        {cartState.length > 0 && itemsList()}
        
        {
        isBuyEnd ? 

          endBuyMessage()

        :
        
          cartState.length > 0 ? 
            <div>
                {clientForm()}
                <Button variant='dark' onClick={() => {saveOrder()}} type="submit">Finalizar Compra</Button>
            </div> 
          :
            <div>
                <h2>El carrito está vacio!</h2>
                <Link to={'/'} style={linkStyle}><Button variant='dark'>Volver al inicio</Button></Link>
            </div>
        }

    </div>
  )
}

export default Cart
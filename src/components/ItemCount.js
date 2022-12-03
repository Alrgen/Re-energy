import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

const ItemCount = (props) => {

  const [ammount, setAmmount] = useState(0);
  const stock = props.greeting;

    useEffect(() => {
      props.getAmmount(ammount)
    }, [ammount])

    function OnAdd(){
        (ammount + 1 <= stock) ? setAmmount(ammount + 1) : alert("Limite de stock"); 
    }
    function OnRemove(){
        (ammount - 1 >= 0) ? setAmmount(ammount - 1) : alert("Item eliminado"); 
    }

  return (
    <ButtonGroup className='text-center align-middle' style={{marginBottom: 20}}>
      <Button variant='dark' onClick={() => OnRemove()}><h1 style={{fontSize: 30, width: 30}}>-</h1></Button>
      <span style={{fontSize: 30, width: 300, border: '4px solid black'}}>{ammount}</span>
      <Button variant='dark' onClick={() => OnAdd()}><h1 style={{fontSize: 30, width: 30}}>+</h1></Button>
    </ButtonGroup>
  )
}

export default ItemCount
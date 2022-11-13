import React, { useEffect, useState } from 'react'

const ItemCount = (props) => {

    const [ammount, setAmmount] = useState(0);
    const stock = props.greeting;

    useEffect(() => {
      return (() => {
        props.getAmmount(ammount)
      })
    }, [ammount])

    function OnAdd(){
        (ammount + 1 <= stock) ? setAmmount(ammount + 1) : alert("Limite de stock"); 
    }
    function OnRemove(){
        (ammount - 1 >= 0) ? setAmmount(ammount - 1) : alert("Item eliminado"); 
    }

  return (
    <div className='itemCount'>
        <div className='button' onClick={OnRemove}> - </div>
        <div className='itemCount-valueDisplay'> <span>{ammount}</span> </div>
        <div className='button' onClick={OnAdd}> + </div>
    </div>
  )
}

export default ItemCount
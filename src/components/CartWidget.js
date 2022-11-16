
const CartWidget = () => {

    let inCartItems = 0;

    return (
        <div className='cart-widget button'>
            <img src="../assets/shopping-cart.png" alt="cart" className='cart'/>

            <span className="cart-number">{inCartItems}</span>
        </div>
    )
}

export default CartWidget;
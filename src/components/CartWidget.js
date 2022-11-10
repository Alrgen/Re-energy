import cart from '../assets/shopping-cart.png'

const CartWidget = () => {

    let inCartItems = 0;

    return (
        <div className='cart-widget button'>
            <img src={cart} alt="cart" className='cart'/>

            <span className="cart-number">{inCartItems}</span>
        </div>
    )
}

export default CartWidget;
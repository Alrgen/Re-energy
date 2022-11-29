import { Link } from "react-router-dom";

const CartWidget = () => {

    let inCartItems = 0;

    return (
        <Link to={'/cart'}>
            <div className='cart-widget button'>
                <img src="../assets/shopping-cart.png" alt="cart" className='cart'/>

                <span className="cart-number">{inCartItems}</span>
            </div>    
        </Link>
    )
}

export default CartWidget;
import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartState } = useCartContext();


    return (
        <div>
            {
                cartState.length > 0 && 
                <Link to={'/cart'}>
                    <div className='cart-widget button'>
                        <img src="../assets/shopping-cart.png" alt="cart" className='cart'/>

                        <span className="cart-number">{cartState.length}</span>
                    </div>    
                </Link>
            }
            
        </div>
    )
}

export default CartWidget;
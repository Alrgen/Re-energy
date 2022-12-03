import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';
import { Button } from "react-bootstrap";

const CartWidget = () => {
    const { cartState } = useCartContext();


    return (
        <div>
            {
                cartState.length > 0 && 
                <Link to={'/cart'}>
                    <Button variant="dark">
                        <div className="d-flex align-items-center">
                            <img src="../assets/shopping-cart.png" alt="cart" height="30"/>

                            <span style={{fontSize: 30, marginLeft: 10}}>{cartState.length}</span>
                        </div>
                    </Button>
                </Link>
            }
            
        </div>
    )
}

export default CartWidget;

/*
                <Link to={'/cart'}>
                    <div className='cart-widget button'>
                        <img src="../assets/shopping-cart.png" alt="cart" className='cart'/>

                        <span className="cart-number">{cartState.length}</span>
                    </div>    
                </Link>
*/
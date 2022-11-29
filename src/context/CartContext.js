import { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const useCartContext = () => useContext(AppContext);

const CartContext = ({ children }) => {
    const [cartState, setCartState] = useState([]);

    const addItem = (item) => {
      if (!isInCart(item)) {
        setCartState([...cartState, item]);
        return;
      }
    }

    const removeItem = (item) => {
      setCartState(prev => prev.filter(element => element.name !== item.name));
    }

    const clear = () => {
      setCartState([]);
    }

    const isInCart = (item) => {
      for (let i = 0; i < cartState.length; i++){
        if (cartState[i].id === item.id) {
          cartState[i].cuantity += item.cuantity;
          return true;
        }
      }
      return false;
    }

  return (
    <AppContext.Provider value={{cartState, addItem, removeItem, clear}}>
        {children}
    </AppContext.Provider>
  )
}

export default CartContext
import React, { createContext, useReducer, useContext } from 'react';

// Crea el contexto del carrito
const CartContext = createContext();

// Define el reducer del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    default:
      return state;
  }
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

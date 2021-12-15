import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    return <CartContext.Provider value={2}>{children}</CartContext.Provider>;
};

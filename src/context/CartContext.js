import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        setCart([...cart, { ...item, cantidad }]);
    };

    return (
        <CartContext.Provider
            value={{
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        total();
        setCart([...cart, { ...item, cantidad }]);
    };

    const deleteItem = (id) => {
        setCart(cart.filter((x) => x.id !== id));
    };

    const total = () => {
        const sumaTotal = cart.reduce(
            (acc, prev) => acc + prev.cantidad * prev.price,
            0
        );
        return sumaTotal;
    };

    const deleteAll = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ addToCart, cart, deleteItem, total, deleteAll }}
        >
            {children}
        </CartContext.Provider>
    );
};

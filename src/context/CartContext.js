import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [number, setNumber] = useState(0);

    const stock = cart.map((i) => {
        return i.stock;
    });
    console.log(stock);

    const add = () => {
        number !== stock && setNumber(number + 1);
    };

    const substract = () => {
        number !== 0 && setNumber(number - 1);
    };

    const updateQty = ({ e }) => {
        setNumber(e.value);
    };

    const addToCart = (item, cantidad) => {
        setCart([...cart, { ...item, cantidad }]);
        console.log(cart);
    };

    const borrar = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cart,
                borrar,
                add,
                substract,
                number,
                updateQty,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //VALIDAR SI YA TENGO EL PRODUCTO, EN CASO DE QUE LO TENGA EN EL CARRITO, SOLO SUMAR LA CANTIDAD
    const addToCart = (item, cantidad) => {
        //CALCULANDO EL TOTAL DEL CARRITO
        //ESTA EN EL CARRITO?
        //SI, ESTA. SUMAR CANTIDAD
        //NO ESTA EN EL  CARRITO?
        //LO SETEO
        //PRIMERO VALIDO Y LUEGO SETEO EN EL ESTADO
        setCart([...cart, { ...item, cantidad }]);
        console.log(cart);
    };

    //BORRAR TODOS LOS ITEMS DEL CARRITO
    const borrar = () => {
        setCart([]);
    };

    //BORRAR SOLO EL QUE ELIGO CON FILTER POR ID

    //CONTANDO LAS UNIDADES
    return (
        <CartContext.Provider value={{ addToCart, cart, borrar }}>
            {children}
        </CartContext.Provider>
    );
};

import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [userEmail, setUserEmail] = useState('');

    const isOnCart = (id) => {
        const carrito = cart.find((x) => x.id === id);
        if (carrito !== undefined) {
            return true;
        } else {
            return false;
        }
    };

    const addToCart = (item, cantidad) => {
        total();
        if (isOnCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const sumarCantidad = (item, cantidad) => {
        const unid = [...cart];
        unid.forEach((x) => {
            (x.id === item.id) & (x.cantidad !== item.stock)
                ? (x.cantidad += cantidad)
                : alert(
                      'Ya tenés la máxima cantidad de este item en el carrito'
                  );
        });
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

    const getUser = (form) => {
        setUserEmail(form);
    };

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cart,
                deleteItem,
                total,
                deleteAll,
                getUser,
                userEmail,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

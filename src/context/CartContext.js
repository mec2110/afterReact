import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [userEmail, setUserEmail] = useState('');

    const isOnCart = (id) => {
        const carrito = cart.some((x) => x.id === id);

        return carrito;
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
            x.id === item.id && (x.cantidad += cantidad);
        });
    };

    const deleteItem = (id) => {
        setCart(cart.filter((x) => x.id !== id));
    };

    const total = () => {
        const sumaTotal = cart.reduce(
            (prev, curr) => prev + curr.cantidad * curr.price,
            0
        );
        return sumaTotal;
    };

    const totalUnidades = () => {
        const unidades = cart.reduce((prev, curr) => prev + curr.cantidad, 0);
        return unidades;
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
                totalUnidades,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

//Otra forma de ver si el item ya está en el carrito y en caso de que esté, sumar la cantidad:
/*     const index = cart.findIndex(i => i.id === item.id) // pos -1

    if (index > -1) {
        //se suma la cantidad
        const oldQnty = cart[index].cantidad

        cart.splice(index, 1)

        setCart([...cart, {...item, cantidad: item.cantidad + oldQnty}])
    } else {
        setCart([...cart, {...item, cantidad}])
    } */

//OTRA FORMA DE CONSULTAR SI EXISTE ES CON UN .SOME

/* const isInCart = () =>{
    return cart.some(prod => item === prod)

    esto devuelve true or false
} */

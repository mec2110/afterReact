import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('items');
        return localData ? JSON.parse(localData) : [];
    });
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(cart));
    }, [cart]);

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
            if ((x.id === item.id) & (cantidad + x.cantidad <= item.stock)) {
                x.cantidad += cantidad;
            }
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

    const suma = (id) => {
        cart.forEach((item) => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCart([...cart]);
        });
    };

    const resta = (id) => {
        cart.forEach((item) => {
            if (item.id === id) {
                item.cantidad === 1
                    ? (item.cantidad = 1)
                    : (item.cantidad -= 1);
            }
            setCart([...cart]);
        });
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
                suma,
                resta,
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

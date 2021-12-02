import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Shop = () => {
    const { cart, borrar } = useContext(CartContext);
    return (
        <>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.cantidad}</p>
                </div>
            ))}
            <button onClick={borrar}>Limpiar carrito</button>
        </>
    );
};

export default Shop;

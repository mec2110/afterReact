import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartDetail from './CartDetail';

const Shop = () => {
    const { cart, borrar } = useContext(CartContext);

    return (
        <>
            {cart.map((item) => (
                <CartDetail key={item.id} item={item} />
            ))}
            <button onClick={borrar}>Limpiar carrito</button>
        </>
    );
};

export default Shop;

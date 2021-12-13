import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Counter from '../Counter';

const ItemDetail = ({ item, onAdd, irAlCarrito }) => {
    const { number } = useContext(CartContext);
    return (
        <div style={{ display: 'flex' }}>
            <img src={item.img} alt="img" />
            <div>
                <h2>{item.name}</h2>
                <h3>$ {item.price}</h3>
                {irAlCarrito ? (
                    <>
                        <Link to="/cart">Terminar compra</Link>
                    </>
                ) : (
                    <>
                        <Counter stock={item.stock} onAdd={onAdd} />
                    </>
                )}
                <button onClick={() => onAdd(number)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;

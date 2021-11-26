import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter';

const ItemDetail = ({ item, onAdd, irAlCarrito }) => {
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
            </div>
        </div>
    );
};

export default ItemDetail;

import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Counter from '../Counter';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [goCart, setGoCart] = useState(false);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        addToCart(item, cantidad);
        setGoCart(true);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px',
            }}
        >
            <div>
                <img
                    width={400}
                    src={item.img}
                    alt="img"
                    style={{ margin: '10px' }}
                />
            </div>
            <div style={{ width: '50%' }}>
                <h2>{item.name}</h2>
                <h3>$ {item.price}</h3>
                <h4 style={{ width: '70%' }}>{item.description}</h4>
            </div>
            {!goCart ? (
                <Counter onAdd={onAdd} stock={item.stock} />
            ) : (
                <Link to="/cart">Ver carrito</Link>
            )}
        </div>
    );
};

export default ItemDetail;

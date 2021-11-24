import React from 'react';
import Counter from '../Counter';

const ItemDetail = ({ item }) => {
    return (
        <div style={{ display: 'flex' }}>
            <img src={item.img} alt="img" />
            <div>
                <h2>{item.name}</h2>
                <h3>$ {item.price}</h3>
                <Counter stock={item.stock} />
            </div>
        </div>
    );
};

export default ItemDetail;

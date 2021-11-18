import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div style={{ display: 'flex' }}>
            <img src={item.img} alt="img" />
            <div>
                <h2>{item.name}</h2>
                <h3>$ {item.price}</h3>
                <h3>stock: {item.stock}</h3>
            </div>
        </div>
    );
};

export default ItemDetail;

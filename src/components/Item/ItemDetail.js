import React from 'react';

const ItemDetail = ({ item }) => {
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
        </div>
    );
};

export default ItemDetail;

import React from 'react';

const Item = ({ img, price }) => {
    return (
        <div style={{ margin: '10px 20px', border: '2px solid black' }}>
            <img width="200px" src={img} alt="producto" />
            <p>${price}</p>
        </div>
    );
};

export default Item;

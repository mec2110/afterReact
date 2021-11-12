import React from 'react';

const Item = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="producto" />
            <p>${item.price}</p>
        </div>
    );
};

export default Item;

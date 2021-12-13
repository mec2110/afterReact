import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Counter = () => {
    const { add, substract, number, stock, updateQty } =
        useContext(CartContext);

    console.log(stock);

    return (
        <div style={{ width: '20%' }}>
            <input value={number} onChange={updateQty} max={stock} />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={add} disabled={number === stock}>
                    +
                </button>
                <button onClick={substract}>-</button>
            </div>
        </div>
    );
};

export default Counter;

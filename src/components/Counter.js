import React, { useState } from 'react';

const Counter = ({ stock }) => {
    const [number, setNumber] = useState(1);

    const add = () => {
        number !== stock && setNumber(number + 1);
    };
    const substract = () => {
        number !== 0 && setNumber(number - 1);
    };

    return (
        <div style={{ width: '70%' }}>
            <p>{number}</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={add}>+</button>
                <button onClick={substract}>-</button>
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Counter;

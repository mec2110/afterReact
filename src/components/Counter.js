import React, { useState } from 'react';

const Counter = ({ stock }) => {
    const [number, setNumber] = useState(0);

    const add = () => {
        number !== stock && setNumber(number + 1);
    };

    const substract = () => {
        number !== 0 && setNumber(number - 1);
    };

    return (
        <div>
            <p>{number}</p>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
        </div>
    );
};

export default Counter;

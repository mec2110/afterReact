import React, { useState } from 'react';

const Efecto = ({ stock, inicial }) => {
    const [number, setNumber] = useState(0);

    /* useEffect(() => {
        console.log('solo 1 vez');
    }, []);

    useEffect(() => {
        console.log('en cada renderización');
    });

    useEffect(() => {
        console.log('solo cuando cambia el estado/prop');
    }, [number]); */

    const add = () => {
        number !== stock && setNumber(number + 1);
    };

    const substract = () => {
        number !== inicial && setNumber(number - 1);
    };

    return (
        <div>
            <p>{number}</p>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
        </div>
    );
};

export default Efecto;

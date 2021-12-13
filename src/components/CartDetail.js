import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

import Counter from './Counter';

const CartDetail = ({ item }) => {
    const [cantidadCart, setCantidadCart] = useState(item.cantidad);
    const { add, substract } = useContext(CartContext);
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <Counter
                number={cantidadCart}
                stock={item.stock}
                setNumber={setCantidadCart}
                add={add}
                substract={substract}
            />
        </div>
    );
};

export default CartDetail;

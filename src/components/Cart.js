import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartDetail from './CartDetail';
import Order from './Order';

const Cart = () => {
    const { cart, total, deleteAll } = useContext(CartContext);
    const [goTicket, setGoTicket] = useState(false);

    const date = new Date();

    const finalizar = () => {
        const db = getFirestore();
        const ref = collection(db, 'ticket');
        const newOrder = {
            buyer: 'eric',
            items: cart,
            date: date,
            total: total(),
        };
        addDoc(ref, newOrder);
        setGoTicket(true);
        deleteAll();
    };

    return (
        <>
            {!goTicket ? (
                <>
                    {cart.map((prod) => (
                        <CartDetail key={prod.id} prod={prod} />
                    ))}
                    <div>
                        <p>TOTAL: $ {total()}</p>
                    </div>
                    <div>
                        <button onClick={deleteAll}>Vaciar Carrito</button>
                    </div>
                    <div>
                        <button onClick={finalizar}>Finalizar compra 🙌🏼</button>
                    </div>
                </>
            ) : (
                <>
                    <Order />
                </>
            )}
        </>
    );
};

export default Cart;

/* { items: cart }, { total: total() }, { date: date });
        console.log('hola');
 */

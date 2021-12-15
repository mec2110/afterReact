import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartDetail from './CartDetail';
import Order from './Order';

const Cart = () => {
    const { cart, total, deleteAll } = useContext(CartContext);
    const [goTicket, setGoTicket] = useState(false);
    const [form, getForm] = useState({});

    const llenarFormulario = (e) => {
        const { name, value } = e.target;
        getForm({
            ...form,
            [name]: value,
        });
    };
    console.log(form);

    const date = new Date();

    const finalizar = () => {
        const db = getFirestore();
        const ref = collection(db, 'ticket');
        const newOrder = {
            buyer: form,
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
                    <form style={{ margin: '15px 0px' }}>
                        <input
                            onChange={llenarFormulario}
                            type="email"
                            name="email"
                            placeholder="email"
                        />
                        <input
                            onChange={llenarFormulario}
                            type="text"
                            name="nombre"
                            placeholder="nombre"
                        />
                    </form>
                    <div>
                        <button
                            onClick={finalizar}
                            disabled={form.email === '' || form.nombre === ''}
                        >
                            Finalizar compra 🙌🏼
                        </button>
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

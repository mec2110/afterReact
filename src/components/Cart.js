import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartDetail from './CartDetail';
import Order from './Order';

const Cart = () => {
    const { cart, total, deleteAll, getUser } = useContext(CartContext);
    const [goTicket, setGoTicket] = useState(false);
    const [form, getForm] = useState({ nombre: '', email: '' });

    const llenarFormulario = (e) => {
        const { name, value } = e.target;
        getForm({
            ...form,
            [name]: value,
        });
    };

    const date = new Date();

    const finalizar = () => {
        getUser(form);
        const db = getFirestore();
        const ref = collection(db, 'ticket');
        const newOrder = {
            buyer: form.email,
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
                        <form
                            onSubmit={finalizar}
                            style={{ margin: '15px 0px' }}
                        >
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
                            <button
                                disabled={
                                    cart?.length === 0 ||
                                    form.nombre === '' ||
                                    form.email === ''
                                }
                            >
                                Finalizar compra 🙌🏼
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <Order />
                    </>
                )}
            </>
        </>
    );
};

export default Cart;

/* { items: cart }, { total: total() }, { date: date });
        console.log('hola');
 */

import {
    addDoc,
    collection,
    doc,
    getDoc,
    getFirestore,
    writeBatch,
} from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartDetail from './CartDetail';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, total, deleteAll, getUser } = useContext(CartContext);
    let navigate = useNavigate();
    const [loadingOrder, setLoadingOrder] = useState(false);
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
        setLoadingOrder(true);

        const db = getFirestore();

        const newOrder = {
            buyer: { email: form.email, nombre: form.nombre },
            items: cart,
            date: date,
            total: total(),
        };

        const batch = writeBatch(db);
        const outOfStock = [];

        newOrder.items.forEach((prod) => {
            getDoc(doc(db, 'products', prod.id)).then((docSnap) => {
                if (docSnap.data().stock >= prod.cantidad) {
                    batch.update(doc(db, 'products', docSnap.id), {
                        stock: docSnap.data().stock - prod.cantidad,
                    });
                } else {
                    outOfStock.push({ id: docSnap.id, ...docSnap.data() });
                }
            });
        });
        if (outOfStock.length === 0) {
            addDoc(collection(db, 'tickets'), newOrder)
                .then((doc) => {
                    batch.commit().then(() => {
                        console.log(`el num de orden es ${doc.id}`);
                    });
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setTimeout(() => {
                        navigate('/dashboard');
                        deleteAll();
                    }, 3000);
                });
        }
    };

    return (
        <>
            {cart.length === 0 ? (
                <h1>Aún no agregaste productos</h1>
            ) : (
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
                    {!loadingOrder ? (
                        <form
                            method="POST"
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
                    ) : (
                        <h1>
                            Estamos generando su orden, será redirigido al
                            Dashboard
                        </h1>
                    )}
                </>
            )}
        </>
    );
};

export default Cart;

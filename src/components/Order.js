import {
    getFirestore,
    collection,
    getDocs,
    orderBy,
    query,
} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import Mensaje from './Mensaje';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Order = () => {
    const [order, setOrder] = useState([]);
    const { userEmail } = useContext(CartContext);
    const { email } = userEmail;

    useEffect(() => {
        const db = getFirestore();
        const ref = query(collection(db, 'ticket'), orderBy('date'));
        getDocs(ref).then((snapshot) => {
            const orden = snapshot.docs.map((doc) => {
                const data = doc.data();
                const { date } = data;
                const fecha = new Date(date.seconds * 1000);
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                }).format(fecha);
                return {
                    id: doc.id,
                    ...data,
                    date: normalizedCreatedAt,
                };
            });

            setOrder(orden.filter((x) => x.buyer === email));
        });
    }, [email]);

    return (
        <div>
            {order?.length === 0 ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h1 style={{ textAlign: 'center' }}>
                        Acá te dejamos tus tickets de compra 😊
                    </h1>
                    {order.map((ord) => (
                        <Mensaje key={ord.id} ord={ord} />
                    ))}
                </>
            )}
            <Link to="/">Volver al Home</Link>
        </div>
    );
};

export default Order;

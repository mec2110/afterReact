import {
    getFirestore,
    collection,
    getDocs,
    orderBy,
    query,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Mensaje from './Mensaje';
import { Link } from 'react-router-dom';

const Order = () => {
    const [order, setOrder] = useState([]);

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
            setOrder(orden);
        });
    }, []);

    return (
        <div>
            {order?.length === 0 ? (
                <h1>No hay ordenes</h1>
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

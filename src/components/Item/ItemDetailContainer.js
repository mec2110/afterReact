import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, 'products', id);
        getDoc(ref).then((snap) => {
            setItem({
                id: snap.id,
                ...snap.data(),
            });
        });
        setLoading(false);
    }, [id]);

    return <>{loading ? <h1>Cargando...</h1> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;

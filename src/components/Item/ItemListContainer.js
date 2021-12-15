import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const ref = collection(db, 'products');
        getDocs(ref).then((snapshot) => {
            const prod = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            const categorias = prod.filter((i) => i.category === `${id}`);
            id === undefined ? setItems(prod) : setItems(categorias);
        });
    }, [id]);

    return (
        <>
            <ItemList items={items} />
        </>
    );
};

export default ItemListContainer;

import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { traerProductos } from './items';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        setLoading(true);
        traerProductos
            .then((res) => {
                const unicoProd = res.find((i) => i.id === 1);
                setItem(unicoProd);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return <>{loading ? <h1>Cargando...</h1> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;

import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { products } from './items';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const traerProducto = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProducto
            .then((res) => {
                const prod = res.find((i) => i.id === parseInt(`${id}`));
                setItem(prod);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <>
            <ItemDetail item={item} />
        </>
    );
};

export default ItemDetailContainer;

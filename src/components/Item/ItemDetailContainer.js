import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemDetail from './ItemDetail';
import { products } from './items';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [irAlCarrito, setIrAlCarrito] = useState(false);
    const [item, setItem] = useState({});
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
        const traerProducto = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProducto
            .then((res) => {
                const prod = res.find((i) => i.id === parseInt(`${id}`));
                setItem(prod);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const onAdd = (cantidad) => {
        //console.log(cantidad, item);
        //console.log({ ...item, quantity: cantidad });
        addToCart(item, cantidad);

        setIrAlCarrito(true);
    };

    return (
        <>
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <ItemDetail
                    item={item}
                    onAdd={onAdd}
                    irAlCarrito={irAlCarrito}
                />
            )}
        </>
    );
};

export default ItemDetailContainer;

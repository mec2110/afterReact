import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [ropa, setRopa] = useState('');

    useEffect(() => {
        const db = getFirestore();
        const ref = collection(db, 'products');
        getDocs(ref).then((snapshot) => {
            const products = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            const categorias = products.filter((i) => i.category === ropa);
            ropa === '' ? setItems(products) : setItems(categorias);
        });
    }, [ropa]);

    return (
        <div>
            <form style={{ margin: '40px 45%' }}>
                <select
                    name="select"
                    value={ropa}
                    onChange={(e) => {
                        const ropa = e.target.value;
                        setRopa(ropa);
                    }}
                >
                    <option value="">Ver todo</option>
                    <option value="remeras">Remeras</option>
                    <option value="camisas">Camisas</option>
                    <option value="rinoneras">Riñoneras</option>
                    <option value="gorras">Gorras</option>
                </select>
            </form>

            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;

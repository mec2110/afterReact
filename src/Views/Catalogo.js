import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from '../components/Item/ItemListContainer';

const Catalogo = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
        </Routes>
    );
};

export default Catalogo;

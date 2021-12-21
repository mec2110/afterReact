import React from 'react';

const Mensaje = ({ ord }) => {
    const nombreDelProducto = ord.items.map((ticket) => ticket.name);

    return (
        <div
            style={{
                border: '1px solid green',
                margin: '30px',
                padding: '7px',
            }}
        >
            <h2 style={{ color: 'red', fontSize: '17px' }}>
                Id de la compra: {ord.id}
            </h2>
            <h2 style={{ fontSize: '15px' }}>Fecha: {ord.date}</h2>
            <h2 style={{ fontSize: '15px' }}>
                Nombre del producto: {nombreDelProducto}
            </h2>
            <h2 style={{ fontSize: '15px' }}>Email: {ord.buyer.email}</h2>
        </div>
    );
};

export default Mensaje;

import React from 'react';

const Mensaje = ({ ord }) => {
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
            <h2 style={{ fontSize: '15px' }}>Email: {ord.buyer.email}</h2>
            <h2 style={{ fontSize: '15px' }}>Fecha: {ord.date}</h2>
            <h2 style={{ fontSize: '15px' }}>
                Nombre de los productos:{' '}
                {ord.items.map((prod, index) => (
                    <ul key={index}>
                        <li>
                            {prod.name} ${prod.price} x {prod.cantidad}
                        </li>
                        <img width={150} src={prod.img} alt={prod.name} />
                    </ul>
                ))}
            </h2>
            <h2 style={{ fontSize: '15px' }}>Total: ${ord.total}</h2>
        </div>
    );
};

export default Mensaje;

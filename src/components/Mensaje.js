import React from 'react';

const Mensaje = ({ ord }) => {
    const nameprod = ord.items.map((x) => x.name);

    return (
        <div
            style={{
                border: '1px solid green',
                margin: '30px',
                padding: '7px',
            }}
        >
            <h2 style={{ color: 'red', fontSize: '17px' }}>{ord.id}</h2>
            <h2 style={{ fontSize: '15px' }}>{ord.date}</h2>
            <h2 style={{ fontSize: '15px' }}>{nameprod}</h2>
        </div>
    );
};

export default Mensaje;

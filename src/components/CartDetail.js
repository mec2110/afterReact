import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartDetail = ({ prod }) => {
    const { deleteItem, suma, resta } = useContext(CartContext);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    border: '1px solid black',
                    margin: '15px',
                }}
            >
                <div>
                    <img width={100} src={prod.img} alt={prod.name} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        margin: '0px 10px',
                    }}
                >
                    <p>{prod.name}</p>
                    <p>$ {prod.price}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <button
                        style={{ width: '10%' }}
                        disabled={prod.cantidad === prod.stock}
                        onClick={() => suma(prod.id)}
                    >
                        +
                    </button>
                    <button
                        style={{ width: '10%' }}
                        disabled={prod.cantidad === 1}
                        onClick={() => resta(prod.id)}
                    >
                        -
                    </button>
                    {prod.cantidad === prod.stock && (
                        <p
                            style={{
                                fontWeight: 'bold',
                                marginTop: '10px',
                                color: 'red',
                            }}
                        >
                            Máximo stock
                        </p>
                    )}
                    <p>Total item: ${prod.price * prod.cantidad} </p>
                    <p>{prod.description}</p>
                </div>
                <div>
                    <button onClick={() => deleteItem(prod.id)}>X</button>
                </div>
            </div>
        </>
    );
};

export default CartDetail;

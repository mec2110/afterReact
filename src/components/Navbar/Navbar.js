import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
    const { totalUnidades } = useContext(CartContext);

    return (
        <nav
            style={{
                backgroundColor: 'pink',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
            }}
        >
            <Link to="/">
                <h2>After React</h2>
            </Link>
            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                }}
            >
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/remeras">Remeras</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/camisas">Camisas</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/gorras">Gorras</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/rinoneras">Rinoneras</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/cart">Carrito</Link>
                    <span>{totalUnidades()}</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

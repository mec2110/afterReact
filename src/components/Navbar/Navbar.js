import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
    const { user } = useContext(UserContext);

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
                {user ? <li>{`Bienvenido ${user.email}`}</li> : <span></span>}

                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/login">Login</Link>
                </li>

                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/cart">Carrito</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/catalogo">Catalogo</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

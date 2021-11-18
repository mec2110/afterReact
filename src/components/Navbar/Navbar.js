import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>After-Class</h1>
            <ul>
                <Link style={{ margin: '0px 10px' }} to="/">
                    Home
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/remeras">
                    Remeras
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/gorras">
                    Gorras
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/rinoneras">
                    Riñoneras
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/camisas">
                    Camisas
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/contador">
                    Contador
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;

import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const { login, user, logout } = useContext(UserContext);

    return (
        <div>
            {user ? (
                <button onClick={logout}>logout</button>
            ) : (
                <button onClick={login}>login con goolge</button>
            )}

            <h2>{user?.email}</h2>
        </div>
    );
};

export default Login;

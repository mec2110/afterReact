import React, { useState, useEffect } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [auth]);

    const login = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                // eslint-disable-next-line
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('sesión cerrada');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <UserContext.Provider value={{ login, user, logout }}>
            {children}
        </UserContext.Provider>
    );
};

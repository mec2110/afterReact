import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { products } from './components/Item/items';
import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAe5VdiOzdkpmVDOOVikYJoM_urJBx0WmU',
    authDomain: 'after-419ba.firebaseapp.com',
    projectId: 'after-419ba',
    storageBucket: 'after-419ba.appspot.com',
    messagingSenderId: '1036730899871',
    appId: '1:1036730899871:web:6b2f4065de890428fb31aa',
};

initializeApp(firebaseConfig);

/* const db = getFirestore();
const ref = collection(db, 'products');

products.map((product) => addDoc(ref, product)); */

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

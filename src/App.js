import './App.css';
import Cart from './components/Cart';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Login from './components/Login';
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <Router>
                    <Navbar />
                    <Login />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:id"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/item/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </CartProvider>
        </UserProvider>
    );
}

export default App;

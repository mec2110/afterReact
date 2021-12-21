import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Login from './components/Login';
import { UserProvider } from './context/UserContext';
import Catalogo from './Views/Catalogo';

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />

                        <Route path="/catalogo" element={<Catalogo />} />
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

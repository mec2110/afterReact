import './App.css';
import Efecto from './components/Efecto';
import ItemListContainer from './components/Item/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route
                    path="/contador"
                    element={<Efecto stock={10} inicial={0} />}
                />
            </Routes>
        </Router>
    );
}

export default App;

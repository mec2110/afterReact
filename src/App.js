import './App.css';
import Counter from './components/Counter';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Catalogo from './Views/Catalogo';

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/contador" element={<Counter />} />
            </Routes>
        </Router>
    );
}

export default App;

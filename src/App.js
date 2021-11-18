import './App.css';
import Efecto from './components/Efecto';
//import ItemListContainer from './components/Item/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogo from './Views/Catalogo';

function App() {
    return (
        <Router>
            <Navbar />
            <Catalogo />
            <Routes>
                <Route
                    path="/contador"
                    element={<Efecto stock={10} inicial={0} />}
                />
            </Routes>
        </Router>
    );
}

export default App;

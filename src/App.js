import './App.css';
//import Efecto from './components/Efecto';
import ItemListContainer from './components/Item/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer saludo="Bienvenidos a mi E-comerce 🙌🏼 " />
            {/* <Efecto /> */}
        </>
    );
}

export default App;

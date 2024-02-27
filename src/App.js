import './App.css'
import Navbar from './components/navbar/Navbar';
import {ItemListContainer} from './components/itemListContainer/itemListContainer'

function App() {
  const saludo= 'Hola'
  return (
    <div>
         <Navbar/>
         <ItemListContainer greeting='Los mejores productos aca!!' saludo= {saludo}/>
    </div>
  );
}

export default App;

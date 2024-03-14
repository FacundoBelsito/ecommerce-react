import './App.css'
import Navbar from './components/navbar/Navbar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import React from 'react';

function App() {
  const saludo = 'Hola'
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la mejor ferreteria' saludo={saludo} />} />
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoria:'/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

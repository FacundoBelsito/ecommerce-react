import './App.css'
import Navbar from './components/navbar/Navbar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import React from 'react';
import {CartProvider} from './context/CartContext';
import Cart from './components/cart/Cart';

function App() {
  const saludo = 'Hola'
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la mejor ferreteria' saludo={saludo} />} />
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoria:'/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path= '/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  ); 
}

export default App;

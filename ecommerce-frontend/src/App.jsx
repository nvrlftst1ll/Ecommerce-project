import { Routes, Route } from 'react-router';

import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import './App.css'
import { useState, useEffect } from 'react';

import axios from 'axios';


function App() {

  // глобальное состояние для корзины
  const [cart, setCart] = useState([]);




  // чтобы async/await работал внутри useEffect() - 
  // нужно сделать в нём обычную стрелочную функцию, 
  // затем сделать внутри неё отдельную асинхронную функцию, 
  // затем запустить эту асинхронную функцию


  const loadCart = async () => {
    //query parameter
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };


  useEffect(() => {



    loadCart();

  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App

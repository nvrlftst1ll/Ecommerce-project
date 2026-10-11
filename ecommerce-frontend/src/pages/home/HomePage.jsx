import axios from "axios";
import { useEffect, useState } from "react";



import { ProductsGrid } from "./ProductsGrid";


import { Header } from '../../components/Header';

import '../../pages/home/HomePage.css';




export function HomePage({ cart, loadCart }) {


  const [products, setProducts] = useState([]);


  // чтобы async/await работал внутри useEffect() - 
  // нужно сделать в нём обычную стрелочную функцию, 
  // затем сделать внутри неё отдельную асинхронную функцию, 
  // затем запустить эту асинхронную функцию
  
  useEffect(() => {
    const getHomeData = async () => {
      // axios более удобная замена fetch
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };


    getHomeData();
  }, []);




  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">

        <ProductsGrid products={products} loadCart={loadCart}/>

      </div>
    </>
  );
}
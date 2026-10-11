import axios from "axios";
import { useState, useEffect } from "react";

import '../../pages/checkout/CheckoutPage.css';

import { CheckoutHeader } from "../../pages/checkout/CheckoutHeader";

import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";



// cart берётся из App.jsx - тк глобальное состояние
export function CheckoutPage({ cart, loadCart }) {


  // состояния чтобы HTML на странице обновлялся
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  const [paymentSummary, setPaymentSummary] = useState(null);






  /* useEffect(() => {
    const fetchAppData = async () => {
      //query parameter
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    fetchAppData();
  }, []); */



  useEffect(() => {

    const fetchDeliveryData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);



    };

    fetchDeliveryData()

  }, [])




 
  
  useEffect(() => {

    const fetchPaymentData = async () => {
      let response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);

    };


    fetchPaymentData();



    // [] - dependency array
  }, [cart]);









  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader
        paymentSummary={paymentSummary}
      />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadCart={loadCart}
          />



          <PaymentSummary
            paymentSummary={paymentSummary}
            loadCart={loadCart}
          
          />




        </div>
      </div>
    </>
  );
}
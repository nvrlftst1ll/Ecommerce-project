import "../../components/components-css/ProductContainer.css";

import axios from "axios";

// ../ - 1 folder
import { formatMoney } from "../../utils/formatMoney"
/* import { useEffect, useState } from "react"; */

import { useState } from "react";



export function ProductContainer({
  ProductId,
  ProductImg,
  ProductName,
  ProductRatingCount,
  ProductStars,
  ProductPriceCents,
  loadCart,


}) {

  const [quantity, setQuantity] = useState(1);



  // добавление в корзину
  const AddToCart = async () => {
    await axios.post("/api/cart-items", {
      // request body
      productId: ProductId,
      quantity: quantity
    });

    await loadCart();
  };


  //выбранное количество 
  const SelectQuantity = (event) => {
    const quantitySelected = Number(event.target.value);

    setQuantity(quantitySelected);

  };




  return (
    <div className="product-container">
      <div className="product-image-container">
        <img 
          className="product-image" 
          src={ProductImg} 
          alt={ProductName} 
          data-testid="product-image"
        />

      </div>

      <div className="product-name limit-text-to-2-lines">
        {ProductName}
      </div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`/images/ratings/rating-${ProductStars * 10}.png`}
          alt={`${ProductStars} stars`}
          data-testid="product-rating-stars-image"
        />
        <div className="product-rating-count link-primary">
          {ProductRatingCount}
        </div>
      </div>

      <div className="product-price">
        {formatMoney(ProductPriceCents)}
      </div>

      <div className="product-quantity-container">

        {/* Controlled input */}
        <select value={quantity} onChange={SelectQuantity}>


          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src="/images/icons/checkmark.png" alt="checkmark" />
        Added
      </div>

      <button className="add-to-cart-button button-primary"
        onClick={
          AddToCart
        }>
        Add to Cart
      </button>
    </div>
  );
}
import { Fragment } from "react";
import dayjs from "dayjs";

import axios from "axios";

import { useNavigate } from "react-router"


export function OrderDetailsGrid({ order, loadCart }) {

    const navigate = useNavigate()

    return (
        <>

            <div className="order-details-grid">

                {/* products generator */}
                {order.products.map((orderProduct) => {




                    const AddToCart = async () => {
                        await axios.post("/api/cart-items", {
                            // request body
                            productId: orderProduct.product.id,
                            quantity: 1,
                        });

                        await loadCart();

                        navigate("/checkout");
                    };




                    return (
                        /* product id */
                        <Fragment key={orderProduct.product.id}>

                            <div className="product-image-container">
                                {/* product image */}
                                <img src={orderProduct.product.image} />
                            </div>

                            <div className="product-details">

                                <div className="product-name">
                                    {/* product name */}
                                    {orderProduct.product.name}
                                </div>

                                <div className="product-delivery-date">
                                    {/* Delivery date */}
                                    Arriving on: {dayjs(orderProduct.product.estimatedDeliveryTimeMs).format("MMMM D")}
                                </div>

                                <div className="product-quantity">
                                    {/* Product Quantity */}
                                    Quantity: {orderProduct.quantity}
                                </div>

                                <button 
                                    onClick={AddToCart} 
                                    className="buy-again-button button-primary"
                                >
                                    <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                    <span className="buy-again-message">Add to Cart</span>
                                </button>
                            </div>

                            <div className="product-actions">
                                <a href="/tracking">
                                    <button className="track-package-button button-secondary">
                                        Track package
                                    </button>
                                </a>
                            </div>

                        </Fragment>
                    );
                })}




            </div>

        </>
    )
}
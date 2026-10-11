import { formatMoney } from "../../utils/formatMoney"

import dayjs from "dayjs";

/* import { useState } from "react"; */
import axios from "axios";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {






    return (

        <>

            <div className="delivery-options">
                <div className="delivery-options-title">
                    Choose a delivery option:
                </div>

                {/* Генерация html под все варианты доставки */}
                {deliveryOptions.map((deliveryOption) => {

                    let priceString = "FREE shipping";

                    if (deliveryOption.priceCents > 0) {
                        priceString = `${formatMoney(deliveryOption.priceCents)} - shipping`;
                    }



                    const UpdateDeliveryOption = async () => {
                                                            // url parameter
                        await axios.put(`/api/cart-items/${cartItem.productId}`, {
                            // request body
                            deliveryOptionId: deliveryOption.id
                        });

                        await loadCart();


                    };




                    return (

                        <>

                            <div key={deliveryOption.id} className="delivery-option" onClick={UpdateDeliveryOption}>
                                <input
                                    type="radio"
                                    checked={deliveryOption.id === cartItem.deliveryOptionId}
                                    onChange={() => {}}
                                    className="delivery-option-input"
                                    name={`delivery-option-${cartItem.productId}`} />

                                <div>
                                    <div className="delivery-option-date">
                                        {dayjs(deliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                                    </div>
                                    <div className="delivery-option-price">
                                        {priceString}
                                    </div>
                                </div>
                            </div>

                        </>

                    )
                })}



            </div>

        </>

    )
}
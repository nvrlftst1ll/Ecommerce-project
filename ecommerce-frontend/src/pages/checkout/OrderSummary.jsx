
import axios from "axios";

import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";



export function OrderSummary({ deliveryOptions, cart, loadCart }) {
    return (

        <>

            <div className="order-summary">

                {deliveryOptions.length > 0 && cart.map(
                    (cartItem) => {

                        const selectedDeliveryOption = deliveryOptions
                            .find((deliveryOption) => {
                                return deliveryOption.id === cartItem.deliveryOptionId;

                            });





// Отправляем запрос в бэкенд на удаление конкретного 
// товара из корзины "await axios.delete" в order summary => 
// автоматом перезагружается корзина "await loadCart()" =>
// fetchPaymentData в CheckoutPage обновляет данные по корзине из бэкенда, =>
// затем сразу через useEffect проверяется корзина по зависимости [cart], 
// и затем обновляется UI


                        const UpdateCartItem = async () => {
                            await loadCart();
                        };

                        const DeleteCartItem = async () => {
                            await axios.delete(`/api/cart-items/${cartItem.productId}`);

                            await loadCart();
                        };



                        return (

                            <>

                                <div key={cartItem.productId} className="cart-item-container">

                                    <DeliveryDate
                                        selectedDeliveryOption={selectedDeliveryOption}
                                    />

                                    <div className="cart-item-details-grid">

                                        <CartItemDetails
                                            cartItem={cartItem}
                                            updateCartItem={UpdateCartItem}
                                            deleteCartItem={DeleteCartItem}
                                        />

                                        <DeliveryOptions
                                            deliveryOptions={deliveryOptions}
                                            cartItem={cartItem}
                                            loadCart={loadCart}
                                        />
                                    </div>
                                </div>

                            </>

                        );
                    })}




            </div>

        </>

    )
}
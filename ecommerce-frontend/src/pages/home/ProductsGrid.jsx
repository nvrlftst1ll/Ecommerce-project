
import { ProductContainer } from "../home/ProductContainer";
import "../../components/components-css/ProductsGrid.css";

/* import axios from "axios"; */
/* import { useState } from "react"; */



export function ProductsGrid({ products, loadCart }) {



    return (

        <>

            <div className="products-grid">
                {products.map((product) => {



                    return (

                        <ProductContainer
                            key={product.id}
                            ProductId={product.id}
                            ProductImg={product.image}
                            ProductName={product.name}
                            ProductRatingCount={product.rating.count}
                            ProductStars={product.rating.stars}
                            ProductPriceCents={product.priceCents}
                            KeyWords={product.keywords}

                            loadCart={loadCart}

                        />

                    )
                })}
            </div>

        </>

    )
}
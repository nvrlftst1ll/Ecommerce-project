
import { render, screen } from "@testing-library/react";
import { it, expect, describe, vi } from "vitest";
// ...


/* import axios from "axios";
import { formatMoney } from "../../utils/formatMoney";
import { useState } from "react"; */
import { ProductContainer } from "./ProductContainer";




describe("ProductContainer", () => {
    it("displays the product details correctly", () => {


        const product = 
            {
                id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                rating: {
                    stars: 4.5,
                    count: 87
                },
                priceCents: 1090,
                keywords: ["socks", "sports", "apparel"]
            }


        const loadCart = vi.fn();



        render(
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
        
        );


        expect(
            screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
        ).toBeInTheDocument();

        expect(
            screen.getByText("$10.90")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("product-image")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("product-image")
        ).toHaveAttribute("src", "images/products/athletic-cotton-socks-6-pairs.jpg");

        expect(
            screen.getByTestId("product-rating-stars-image")
        ).toHaveAttribute("src", "/images/ratings/rating-45.png");

        expect(
            screen.getByText("87")
        ).toBeInTheDocument();


    });
});



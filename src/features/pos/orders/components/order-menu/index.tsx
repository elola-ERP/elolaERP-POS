import React, { useEffect, useState } from "react";
import { Input } from "../../../../base";
import { CategoryProductButton } from "../category-product-button";
import { ProductCard } from "../productCard";
import { axiosInstance } from "@/src/api/axiosClient";
import { ProductProps, CategoryProps } from "./type";
import { AddProductModal } from "../add-product-modal";

const dummyProducts = Array.from({ length: 100 }, (v, i) => ({
    product_id: i + 1,
    product_name: `Product ${i + 1}`,
    product_price: Math.floor(Math.random() * 1000) + 50, // Random price between 50 and 1050
    product_image: "/img/default-product-image.webp",
    product_category_id: (i % 10) + 1 // Cycling through 10 categories (1 to 10)
}));

const generateDummyProducts = () => {
    return Array.from({ length: 100 }, (v, i) => ({
        product_id: i + 1,
        product_name: `Product ${i + 1}`,
        product_price: (i + 1) * 10, // Use a fixed value for consistency
        product_image: "/img/default-product-image.webp",
        product_category_id: (i % 10) + 1 // Cycling through 10 categories (1 to 10)
    }));
};

export function OrderMenu() {
    

    return (
        <div className="m-4">
            <div className="flex">
                <div className="w-1/2 text-center p-4 font-bold border border-black mr-2 rounded-lg">
                    Order
                </div>
                <div className="w-1/2 text-center p-4 font-bold border border-black ml-2 rounded-lg">
                    Takeaway
                </div>
            </div>

            <div className="mt-4">
                <Input
                    placeholder="Enter product name"
                    containerClassName="bg-white"
                />
            </div>

            <div className="mt-4 flex gap-2">

                <CategoryProductButton 
                    productCategoryName="All Products"
                />
                <CategoryProductButton 
                    productCategoryName="Main"
                />
                <CategoryProductButton 
                    productCategoryName="Beverages"
                />
            </div>

            <div className="mt-4 grid grid-cols-6 gap-2 overflow-y-auto max-h-[calc(70vh-4rem)]">
                    <ProductCard
                        key={1}
                        productImage={'/img/default-product-image.webp'}
                        productName={'product_name'}
                        price={20000}

                    />
            </div>
        </div>
    );
}

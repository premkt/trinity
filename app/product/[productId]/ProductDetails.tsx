'use client'

import Botton from "@/app/components/Button";
import ProductImage from "@/app/components/product/Productimage";
import SetColor from "@/app/components/product/SetColor";
import SetQuantity from "@/app/components/product/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Button, Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Product from "./page";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
    product: any;
}


export type CartProductType = {
    id: string,

    name: string;
    description: string;
    category: string;
    brand: string;
    selectedImg: SelectedImgType;
    quantity: number;
    price: number;

}


export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string

}


const Horizontal = () => {

    return <hr className="w-[30%] my-2" />;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { handleAddProductToCart, cartProducts } = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price,


    });
    const router = useRouter()
    console.log(cartProducts);
    useEffect(() => {
        setIsProductInCart(false);

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
            );
            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts]);


    const productRating =
        product.reviews.reduce((acc: number, item: any) =>
            item.rating + acc, 0) /
        product.reviews.lenght;

    const handleColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => {
            return { ...prev, selectedImg: value }
        })

    }, [cartProduct.selectedImg])

    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.quantity === 99) {
            return;
        }

        setCartProduct((prev) => {
            return { ...prev, quantity: ++prev.quantity };
        });
    }, [cartProduct]);
    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.quantity === 1) {
            return;
        }


        setCartProduct((prev) => {
            return { ...prev, quantity: --prev.quantity };
        });
    }, [cartProduct]);





    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <ProductImage
                cartProduct={cartProduct}
                product={product}
                handleColorSelect={handleColorSelect}
            />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <div>     <Rating value={productRating} readOnly />    </div>
                    <div>{product.reviews.lenght}reviews</div>
                </div>
                <Horizontal />
                <div className="text-justify">
                    {product.description}
                </div>
                <Horizontal />
                <div>
                    <span className="font-semibold">
                        CATEGORY :

                    </span>{product.category}
                </div>
                <div>
                    <span className="font-semibold">
                        Brand :

                    </span>{product.brand}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? "In stock" : "Out of Stock"}

                </div>
                <Horizontal />
                {isProductInCart ? (
                    <>
                        <p className="mb-2 text-slate-500  items-center gap-1">
                            <MdCheckCircle className="text-teal-400" size={20} />
                            <span>product added to cart</span>

                        </p>
                        <div className="max-w-[300px]">
                            <Botton
                                label="View Cart"
                                outline
                                onClick={() => {
                                    router.push("/cart");
                                }}
                            />
                        </div>

                    </>
                ) : (
                    <>

                        <SetColor
                            cartProduct={cartProduct}
                            images={product.images}
                            handleColorSelect={handleColorSelect}
                        />
                        <Horizontal />
                        <SetQuantity
                            cartProduct={cartProduct}
                            handleQtyIncrease={handleQtyIncrease}
                            handleQtyDecrease={handleQtyDecrease}
                        />
                        <Horizontal />
                        <div className="max-w-[300px]">
                            <Botton label="Add To Cart" onClick={() => handleAddProductToCart(cartProduct)} />
                        </div>
                    </>
                )}

            </div>

        </div>
    );
};

export default ProductDetails;
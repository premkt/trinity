"use client "

import { CartContextProvider } from "@/hooks/useCart";

interface CartProductProps {
    children: React.ReactNode;
}

const CartProvider: React.FC<CartProductProps> = ({ children }) => {
    return (<CartContextProvider>{children}</CartContextProvider>);
};

export default CartProvider;
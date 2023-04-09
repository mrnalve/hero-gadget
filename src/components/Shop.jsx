import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../utilities/fakeDB";
import { cartContext, productContext } from "../App";
import { toast } from "react-hot-toast";

const Shop = () => {
  const products = useContext(productContext)
  const [cart, setCart] = useContext(cartContext)
  // Card button handler
  const handleAddToCart = (product) => {
    let newCart = []
    const exist = cart.find(existingProduct => existingProduct.id === product.id)
    if (!exist) {
      product.quantity = 1
      newCart = [...cart, product]
    }else{
      const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
      exist.quantity += 1
      newCart = [...rest, exist]
    }
    toast.success('Product Added! 🛒')
    setCart(newCart)
    addToDb(product.id);
  };

  const productsData = useLoaderData();
  return (
    <div className="product-container">
      {productsData.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          handleAddToCart={handleAddToCart}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;

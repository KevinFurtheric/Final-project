import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch product details from the backend
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  const addToCart = () => {
    // Add product to cart (you can implement this logic)
    console.log("Product added to cart:", product);
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.product_name} />
      <h1>{product.product_name}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <p>Stock: {product.Stock}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;

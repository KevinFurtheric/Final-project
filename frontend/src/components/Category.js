import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Category.css";

const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend based on category ID
    fetch(`/api/categories/${id}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="category-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <div className="product-card">
              <img src={product.image} alt={product.product_name} />
              <h3>{product.product_name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;

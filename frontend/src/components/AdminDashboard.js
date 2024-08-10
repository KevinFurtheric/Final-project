import React, { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    price: "",
    description: "",
    image: null,
    category: "",
    stock: "",
  });
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: null,
    description: "",
  });

  useEffect(() => {
    // Fetch products and categories from the backend
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));

    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteProduct = (productId) => {
    fetch(`/api/products/${productId}`, { method: "DELETE" })
      .then(() =>
        setProducts(products.filter((product) => product._id !== productId))
      )
      .catch((err) => console.error(err));
  };

  const handleDeleteCategory = (categoryId) => {
    fetch(`/api/categories/${categoryId}`, { method: "DELETE" })
      .then(() =>
        setCategories(
          categories.filter((category) => category._id !== categoryId)
        )
      )
      .catch((err) => console.error(err));
  };

  const handleAddProduct = () => {
    const formData = new FormData();
    for (const key in newProduct) {
      formData.append(key, newProduct[key]);
    }

    fetch("/api/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setProducts([...products, data]))
      .catch((err) => console.error(err));
  };

  const handleAddCategory = () => {
    const formData = new FormData();
    for (const key in newCategory) {
      formData.append(key, newCategory[key]);
    }

    fetch("/api/categories", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setCategories([...categories, data]))
      .catch((err) => console.error(err));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Add New Category */}
      <h2>Add New Category</h2>
      <input
        type="text"
        placeholder="Category Name"
        value={newCategory.name}
        onChange={(e) =>
          setNewCategory({ ...newCategory, name: e.target.value })
        }
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setNewCategory({ ...newCategory, image: e.target.files[0] })
        }
      />
      <input
        type="text"
        placeholder="Description"
        value={newCategory.description}
        onChange={(e) =>
          setNewCategory({ ...newCategory, description: e.target.value })
        }
      />
      <button onClick={handleAddCategory}>Add Category</button>

      {/* Add New Product */}
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.product_name}
        onChange={(e) =>
          setNewProduct({ ...newProduct, product_name: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setNewProduct({ ...newProduct, image: e.target.files[0] })
        }
      />
      <select
        value={newProduct.category}
        onChange={(e) =>
          setNewProduct({ ...newProduct, category: e.target.value })
        }
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Stock"
        value={newProduct.stock}
        onChange={(e) =>
          setNewProduct({ ...newProduct, stock: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>

      {/* Product Table */}
      <h2>Products</h2>
      <input type="text" placeholder="Search products..." />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.product_name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDeleteProduct(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Category Table */}
      <h2>Categories</h2>
      <input type="text" placeholder="Search categories..." />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDeleteCategory(category._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

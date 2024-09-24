// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const API_URL = 'http://localhost:3000/api/admin/products';
  
  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setProducts(data.products);
      } else {
        console.error('Failed to fetch products:', data.message);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Add a new product
  const addProduct = async (product) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (response.ok) {
        setProducts((prevProducts) => [...prevProducts, data.product]);
        setShowForm(false);
      } else {
        console.error('Failed to add product:', data.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Update an existing product
  const updateProduct = async (product) => {
    try {
      const response = await fetch(`${API_URL}/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.map((p) => (p._id === data.product._id ? data.product : p))
        );

        setEditingProduct(null);
      } else {
        console.error('Failed to update product:', data.message);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      } else {
        const data = await response.json();
        console.error('Failed to delete product:', data.message);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Add/Edit Product Form */}
      {showForm && (
        <ProductForm
          onSubmit={addProduct}
          onCancel={() => setShowForm(false)}
        />
      )}
      {editingProduct && (
        <ProductForm
          initialProduct={editingProduct}
          onSubmit={updateProduct}
          onCancel={() => setEditingProduct(null)}
        />
      )}

      {!showForm && !editingProduct && (
        <>
          <button onClick={() => setShowForm(true)} className="add-button">
            Add New Product
          </button>

          {/* Products Table */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Sizes</th>
                <th>Colors</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>{product.stockCount}</td>
                  <td>{product.sizes.join(', ')}</td>
                  <td>{product.colors.join(', ')}</td>
                  <td>
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;

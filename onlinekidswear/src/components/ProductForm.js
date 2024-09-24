// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';

const ProductForm = ({ initialProduct, onSubmit, onCancel }) => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stockCount: '',
    sizes: '',
    colors: '',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (initialProduct) {
      setProduct({
        ...initialProduct,
        sizes: initialProduct.sizes.join(', '),
        colors: initialProduct.colors.join(', '),
      });
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedProduct = {
      ...product,
      sizes: product.sizes.split(',').map((size) => size.trim()),
      colors: product.colors.split(',').map((color) => color.trim()),
    };
    onSubmit(formattedProduct);
  };

  return (
    <div className="form-container">
      <h2>{initialProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={product.name} onChange={handleChange} required />

        <label>Category:</label>
        <input name="category" value={product.category} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />

        <label>Stock Count:</label>
        <input
          type="number"
          name="stockCount"
          value={product.stockCount}
          onChange={handleChange}
          required
        />

        <label>Sizes (comma-separated):</label>
        <input name="sizes" value={product.sizes} onChange={handleChange} required />

        <label>Colors (comma-separated):</label>
        <input name="colors" value={product.colors} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} required />

        <label>Image URL:</label>
        <input name="imageUrl" value={product.imageUrl} onChange={handleChange} required />

        <div className="button-group">
          <button type="submit">{initialProduct ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

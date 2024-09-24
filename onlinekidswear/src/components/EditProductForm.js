import React, { useState, useEffect } from 'react';

const EditProductForm = ({ product, onClose, onProductUpdated }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/admin/products/${updatedProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updatedProduct),
      });

      const data = await response.json();
      if (response.ok) {
        onProductUpdated(data.product);
        onClose();
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input name="name" value={updatedProduct.name} onChange={handleChange} required />
      <input name="category" value={updatedProduct.category} onChange={handleChange} required />
      <input name="price" value={updatedProduct.price} onChange={handleChange} required />
      <input name="stockCount" value={updatedProduct.stockCount} onChange={handleChange} required />
      <input name="sizes" value={updatedProduct.sizes} onChange={handleChange} required />
      <input name="colors" value={updatedProduct.colors} onChange={handleChange} required />
      <input name="description" value={updatedProduct.description} onChange={handleChange} required />
      <input name="imageUrl" value={updatedProduct.imageUrl} onChange={handleChange} required />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProductForm;

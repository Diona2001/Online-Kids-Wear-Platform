import React, { useState } from 'react';

const AddProductForm = ({ onProductAdded }) => {
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

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      if (response.ok) {
        onProductAdded(data.product);
        setProduct({
          name: '',
          category: '',
          price: '',
          stockCount: '',
          sizes: '',
          colors: '',
          description: '',
          imageUrl: '',
        });
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Inline styles
  const formStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const h2Style = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#333',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#218838',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={h2Style}>Add Product</h2>
      <input 
        name="name" 
        value={product.name} 
        onChange={handleChange} 
        placeholder="Product Name" 
        required 
        style={inputStyle} 
      />
      <input 
        name="category" 
        value={product.category} 
        onChange={handleChange} 
        placeholder="Category" 
        required 
        style={inputStyle} 
      />
      <input 
        name="price" 
        value={product.price} 
        onChange={handleChange} 
        placeholder="Price" 
        required 
        style={inputStyle} 
      />
      <input 
        name="stockCount" 
        value={product.stockCount} 
        onChange={handleChange} 
        placeholder="Stock Count" 
        required 
        style={inputStyle} 
      />
      <input 
        name="sizes" 
        value={product.sizes} 
        onChange={handleChange} 
        placeholder="Sizes" 
        required 
        style={inputStyle} 
      />
      <input 
        name="colors" 
        value={product.colors} 
        onChange={handleChange} 
        placeholder="Colors" 
        required 
        style={inputStyle} 
      />
      <input 
        name="description" 
        value={product.description} 
        onChange={handleChange} 
        placeholder="Description" 
        required 
        style={inputStyle} 
      />
      <input 
        name="imageUrl" 
        value={product.imageUrl} 
        onChange={handleChange} 
        placeholder="Image URL" 
        required 
        style={inputStyle} 
      />
      <button 
        type="submit" 
        style={buttonStyle} 
        onMouseOver={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;

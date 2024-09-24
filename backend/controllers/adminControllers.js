const jwt = require('jsonwebtoken');
const Product = require('../models/Products');

// Function to handle admin login
const adminLogin = async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the provided username and password match the stored admin credentials
    if (email === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      // Generate a JWT token for the admin
      const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    }
  
    res.status(401).json({ message: 'Invalid credentials' });
  };
// Function to handle product creation
const addProduct = async (req, res) => {
    const { name, category, price, stockCount, sizes, colors, description, imageUrl } = req.body;
  
    try {
      // Create a new product
      const newProduct = new Product({
        name,
        category,
        price,
        stockCount,
        sizes,
        colors,
        description,
        imageUrl
      });
  
      // Save product to the database
      await newProduct.save();
      res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  module.exports = {
    addProduct,
  };

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ product });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { adminLogin,addProduct, getAllProducts, updateProduct, deleteProduct, getProductById };

const express = require('express');
const router = express.Router();
const {adminLogin, addProduct, getAllProducts, updateProduct, deleteProduct, getProductById } = require('../controllers/adminControllers');
const adminAuth = require('../middleware/adminMiddleware');
// Route for admin login
router.post('/login', adminLogin);

// Use middleware for admin authentication for other routes
router.use(adminAuth);
// Route for adding a new product
router.post('/products', addProduct);

// Route for getting all products
router.get('/products', getAllProducts);

// Route for getting a product by ID
router.get('/products/:id', getProductById);

// Route for updating a product by ID
router.put('/products/:id', updateProduct);

// Route for deleting a product by ID
router.delete('/products/:id', deleteProduct);

module.exports = router;

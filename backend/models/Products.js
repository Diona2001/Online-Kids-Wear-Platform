// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stockCount: { type: Number, required: true },
  sizes: { type: [String], required: true },
  colors: { type: [String], required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

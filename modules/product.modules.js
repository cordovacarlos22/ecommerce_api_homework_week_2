import mongoose from 'mongoose';

const ProductItem = new mongoose.Schema({
  product_name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  sku: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  isActive: { type: Boolean, required: true, default: true },
});

const Product = mongoose.model('Product', ProductItem);

export default Product;

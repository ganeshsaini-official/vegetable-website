import mongoose from 'mongoose';

const product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    hindiName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    categories: {
      type: String,
      required: true,
      enum: ['vegetables', 'fruits', 'dairy', 'spices']
    },
    images: [
      {
        type: String,
        required: true
      }
    ],
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0
    },
    unit: {
      type: String,
      required: true,
      enum: ['kg', 'gm', 'piece', 'packet', 'dozen', 'liter']
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
   },
  { timestamps: true }
);

const Product = mongoose.model("product", product)
export default Product;


import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);
// Mongoose will make the collection plural and make it lower case
// Product -> products (mongoose will handle it)

export default Product;
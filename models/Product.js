const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id:{type: 'string', required: true, unique: true},
    title:{type: String, required: true},
    desc:{type: String, required: true, unique: true},
    price:{type: Number, required: true},
    category:{type: Array, required: true},
    size:{type: Array, required: true},
    color:{type: Array, required: true},
    img:{type: Array, required: true},
    stock:{type: Integer, required: true}
});
module.exports = mongoose.model('Product',ProductSchema);
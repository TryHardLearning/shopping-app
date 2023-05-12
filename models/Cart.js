const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id:{type: String, required: true, unique: true},
    products:[
        {
            productId: {type: String, required: true},
            quantity: {type: Integer,default: 1, required: true},
        }
    ],
    userId:{type: String, required: true},
    typeUser:{type: Integer, default: 0},

});
module.exports = mongoose.model('Cart',CartSchema);
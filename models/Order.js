const mongoose = require('mongoose');
/*parei aqui*/
const OrderSchema = new mongoose.Schema({
    id: {type: 'string', required: true,unique: true},
    username:{type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    typeUser:{type: Integer, default: 0},

},
    {timestamps: true}
);
module.exports = mongoose.model('Order',OrderSchema);
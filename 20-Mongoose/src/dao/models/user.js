const mongoose = require('mongoose');
const { Schema } = require('mongoose');

//Estructura del documento en MongoDB a traves de Mongoose
const userSchema = new Schema ({
    name: String,
    email: String,
    address: String,
    age: Number,
})

//Acceso a los metodos para hacer el CRUD
module.exports = mongoose.model('users', userSchema);

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schemaMessage = new Schema({
    text: { type: String, max: 400 },
    user: { type: String, require: true, max: 100 },
    timestamp: { type: Date, default: new Date() }
});

//Acceso a los metodos para hacer el CRUD
module.exports = mongoose.model('users', schemaMessage);
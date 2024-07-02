const mongoose = require('mongoose');

// Definir el esquema del usuario
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Exportar el modelo del usuario
module.exports = mongoose.model('User', UserSchema);

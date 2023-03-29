const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    nom: { type: String, required: false },
    prenom: { type: String, required: false },
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false },
   confirmePwd:{type: String, required: false},
    
    role: { type: String, required: false },
    
}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('User', userSchema);
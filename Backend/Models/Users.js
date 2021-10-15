const mongoose = require ('mongoose');
const {Schema, model} = mongoose;
    
    
const Vschema = new Schema ({
    nombre: {Type: String, required: true, unique: true, trim: true},
    tipodeid: {type: String, trim: true},
    ID: {Type: String, required: true, unique: true, trim: true},
    address: {type: String, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
    telefono: {type: Number, trim: true},
    Mobile: {Type: Number, required: true, unique: true, trim: true},
    Cargo: {type: String, trim: true},
    especialidad: {Type: String, required: true, unique: true, trim: true},
    fecha: {type: Date, default: Date.now, required: true, unique: true, trim: true},
    observaciones: {type: String , trim: true},
})

const Users = model('Users', Vschema);
module.exports = Users;
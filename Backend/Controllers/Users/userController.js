const {getDB} = require ('../../Database.js');
const {ObjectId} = require ('mongodb').ObjectId;

const getAllUsers = async (callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('dbvendedores').find().limit(50).toArray(callback);
  };

  const createUser = async (datosUsuario, callback) => {
      const baseDeDatos = getDB();
      await baseDeDatos.collection('dbvendedores').insertOne(datosUsuario, callback);
      console.log(datosUsuario);
    };
    
    const editUser = async (vehicleId, data, callback) => {
        const filtroUsuario = { _id: new ObjectId(vehicleId) };
        const operacion = {
          $set: data,
        };
        const baseDeDatos = getDB();
        await baseDeDatos
          .collection('dbvendedores')
          .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback);
      };

      const deleteUser = async (vehicleId, callback) => {
        const filtroUsuario = { _id: new ObjectId(vehicleId) };
        const baseDeDatos = getDB();
        await baseDeDatos.collection('dbvendedores').deleteOne(filtroUsuario, callback);
      };


module.exports = {getAllUsers,createUser,editUser, deleteUser};


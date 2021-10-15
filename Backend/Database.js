const MongoClient = require ('mongodb').MongoClient;

const URI = 'mongodb+srv://vendedores:Bogota2021@cluster0.099uh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient (URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

let baseDeDatos;
const connectServer = (callback) => {
    client.connect((err, db) => {
        if (err) {
        console.error('Error conectando a la base de datos');
        return 'error';
    }
    baseDeDatos = db.db('myFirstDatabase');
    console.log('baseDeDatos exitosa');
    return callback();
});
};

const getDB = () => {
    return baseDeDatos;
  };
  
module.exports = {connectServer, getDB};

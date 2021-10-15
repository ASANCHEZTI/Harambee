const express = require ('express');
const {connectServer} = require ('./Database.js');
const routesUser = require ('./Routes/user/routesUser.js');

const app = express ();
app.use(express.json());


//settings
app.set ('port', process.env.port || 4000)

//Routes
app.use(routesUser);

//starting server
const Main = () => {return app.listen(app.get('port'), () => {
            console.log('server on')
        })};

connectServer (Main);

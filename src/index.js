const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//settings
app.set('port', 4000);
    //para cargar el motor de plantillas ejs
app.set('view engine', 'ejs');
    // para que los archivos html se puedan ver y se rendericen con el motro de platillas ejs. 
    //con esta linea los ficheros html se pueden ver y además, tambien los .ejs
app.engine('html', require('ejs').renderFile);
    //para decirle a ejs donde esta mi fichero index.ejs
app.set('views', path.join(__dirname, 'views'));
    // donde alojo las rutas de mi app
const rutas = require('./routes/index');

// midelwares

//routes
app.use(rutas);


//static files 
    //una carpeta que será publica en el eservidor.
app.use(express.static(path.join(__dirname, 'public')))

//listening the server
app.listen(app.get('port'),  () => {
    console.log('Server on port', app.get('port'));
});


//como no está en una función es lo primero que se crea 
console.log('server run and listening');
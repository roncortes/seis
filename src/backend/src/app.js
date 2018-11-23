const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

//configuracion
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//rutas
require('./routes/rutas_usuarios')(app);
require('./routes/rutas_user')(app);

app.listen(app.get('port'), () => {
    console.log('server en el puerto 3000');
});
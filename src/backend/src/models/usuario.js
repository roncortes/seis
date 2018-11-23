const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hackaton'
});

let usuario = {};

usuario.getUsuarios = (callback) => {
    if(connection){
        connection.query('SELECT * FROM usuario', 
        (err, rows) => {
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
}

usuario.getUsuario = (rut, callback) => {
    if(connection){
        connection.query('SELECT * FROM usuario WHERE us_rut = "' + rut + '";' , 
        (err, rows) => {
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
}

module.exports = usuario;
const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hackaton'
});

let paciente = {};

paciente.getPacientes = (callback) => {
    if(connection){
        connection.query('SELECT * FROM paciente', 
        (err, rows) => {
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
}

paciente.getPaciente = (rut, callback) => {
    if(connection){
        connection.query('SELECT * FROM paciente WHERE rut_paciente = "' + rut + '";' , 
        (err, rows) => {
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
}

paciente.insertAdmision = (admisionData, callback) => {
    if(connection){
        connection.query('INSERT INTO admision SET ?', admisionData,
        (err, result) => {
            if (err){
                throw err;
            }else{
                callback(null, {
                    'Resultado' : result.Resultado
                });
            }
        });
    }
}

module.exports = paciente;
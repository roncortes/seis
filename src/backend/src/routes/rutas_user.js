const usuario = require('../models/usuario');

module.exports = function(app){

    app.get('/usuario', (req, res) => {
        usuario.getUsuarios((err, data) => {
            res.status(200).json(data);
        });
        
    });

    app.get('/usuario/:rut', (req, res) => {
        usuario.getUsuario(req.params.rut, (err, data) => {
            res.status(200).json(data);
        });
        
    });

}

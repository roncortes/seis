const paciente = require('../models/paciente');

module.exports = function(app){

    app.get('/paciente', (req, res) => {
        paciente.getPacientes((err, data) => {
            res.status(200).json(data);
        });
        
    });

    app.get('/paciente/:rut', (req, res) => {
        paciente.getPaciente(req.params.rut, (err, data) => {
            res.status(200).json(data);
        });
        
    });

    created = new Date();

    app.post('/paciente', (req, res) => {
       const admisionData = {
           admision_id: null,
           id_paciente: req.body.id_paciente,
           fecha: created,
           especialidad: req.body.especialidad,
           admision_motivo: req.body.motivo
       }
       
       paciente.insertAdmision(admisionData, (err, data) => {
        if(data){
            res.json({
                success: true,
                msg: 'Admisión Realizada',
                data: data
            });
        }else{
            res.status(500).json({
                success: false,
                msg: 'Error'
            });
        }
    });

    });



}

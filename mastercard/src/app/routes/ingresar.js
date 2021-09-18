const conn = require('../../config/database');
module.exports = (app) => {
    app.get('/ingresar/admin/nombre/:nombre/password/:pw', (req, res, next) => {
        let query = `SELECT id_admin, nombre, pw FROM administradores WHERE nombre ='${req.params.nombre}' AND pw = '${req.params.pw}'`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Consulta ejecutada", nombres:rows.rows});
            }
        });
    });
    app.get('/ingresar/cliente/nombre/:nombre/password/:pw', (req, res, next) => {
        let query = `SELECT id_usuario, nombre, pw FROM usuarios WHERE nombre ='${req.params.nombre}' AND pw = '${req.params.pw}'`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Se encontro el usuario", nombres:rows.rows});
            }
        });
    });
}
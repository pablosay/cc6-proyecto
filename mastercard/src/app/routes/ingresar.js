const conn = require('../../config/database');
module.exports = (app) => {
    app.get('/ingresar/admin/nombre/:nombre/password/:pw', (req, res, next) => {
        let query = `SELECT nombre, pw FROM administradores WHERE nombre ='${req.params.nombre}' AND pw = '${req.params.pw}'`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Consulta ejecutada", nombres:rows.rows});
            }
        });
    });
    app.get('/ingresar/cliente/nombre/:nombre/password/:pw', (req, res, next) => {
        let query = `SELECT nombre, pw FROM usuarios WHERE nombre ='${req.params.nombre}' AND pw = '${req.params.pw}'`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Se encontro el usuario", nombres:rows.rows});
            }
        });
    });
    app.post('/pagadmin/ingresarcliente', (req,res, next) => {
        let query = `INSERT INTO usuarios(nombre, pw) VALUES ('${req.body.nombre}', '${req.body.pw}')`;
        conn.query(query, (err,rows, cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Ingreso Correctamente el cliente", nombres:rows.rows});
            }
        });
    });
}
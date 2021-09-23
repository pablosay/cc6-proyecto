const conn = require('../../config/database');
module.exports = (app) => {
    app.post('/pagadmin/emitirtarjeta', (req, res, next) => {
        let query = `INSERT INTO tarjetas (numero, nombre_titular, fecha_vencimiento, ccv, monto_autorizado, monto_disponible, usuario, admin_id)
        VALUES (${req.body.numero}, '${req.body.nombre_titular}', '${req.body.fecha_vencimiento}',${req.body.ccv},${req.body.monto_autorizado} ,${req.body.monto_autorizado}, ${req.body.usuario}, ${req.body.admin_id})`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Ingresador correctamente", nombres:rows.rows});
            }
        });
    });
}
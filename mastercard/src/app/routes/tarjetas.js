const conn = require('../../config/database');
module.exports = (app) => {
    app.post('/pagadmin/emitirtarjeta', (req, res, next) => {
        let query = `INSERT INTO tarjetas (numero, nombre_titular, fecha_vencimiento, ccv, monto_autorizado, monto_disponible, nombre_usuario, nombre_admin) VALUES (${req.body.numero}, '${req.body.nombre_titular}', '${req.body.fecha_vencimiento}', ${req.body.ccv},${req.body.monto_autorizado} ,${req.body.monto_autorizado}, '${req.body.nombre_usuario}', '${req.body.nombre_admin}')`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Ingresador correctamente", nombres:rows.rows});
            }
        });
    });
    app.get('/pagusuario/tarjetas/:nombre', (req, res, next) => {
        let query = `SELECT numero, nombre_titular, fecha_vencimiento, ccv, monto_autorizado, monto_disponible FROM tarjetas WHERE nombre_usuario = '${req.params.nombre}'`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Consulta ejecutada", tarjetas:rows.rows});
            }
        });
    });
    app.get('/pagusuario/tarjetas/numeros/:nombre', (req, res, next) => {
        let query = `SELECT numero FROM tarjetas WHERE nombre_usuario = '${req.params.nombre}'`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Consulta ejecutada", numeros:rows.rows});
            }
        });
    });
    app.get('/pagusuario/tarjetas/:numero/montoautorizado', (req, res, next) => {
        let query = `SELECT monto_autorizado, monto_disponible FROM tarjetas WHERE numero = ${req.params.numero}`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Consulta ejecutada", montos:rows.rows});
            }
        });
    });
    app.get('/pagadmin/tiendas', (req, res, next) => {
        let query = `SELECT nombre FROM tiendas`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Consulta ejecutada", tiendas:rows.rows});
            }
        });
    });
    app.put('/pagadmin/tiendas/tienda/:tienda/ip/:ip', (req,res, next) => {
        let query = `UPDATE tiendas SET ip = '${req.params.ip}' WHERE nombre = '${req.params.tienda}'`;
        conn.query(query, (err,rows, cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Consulta ejecutada", tiendas:rows.rows});
            }
        });
    });
    app.put('/pagusuario/pagartarjetas/updatetarjeta/numero/:numero/monto/:monto', (req,res, next) => {
        let query = `UPDATE tarjetas SET monto_disponible = monto_disponible + '${req.params.monto}' WHERE numero = '${req.params.numero}'`;
        conn.query(query, (err,rows, cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Consulta ejecutada", tarjetas:rows.rows});
            }
        });
    });

    app.post('/pagusuario/pagartarjetas', (req, res, next) => {
        let query = `INSERT INTO pagos (monto_pago, fecha_pago, no_tarjeta) VALUES (${req.body.monto_pago}, '${req.body.fecha_pago}', '${req.body.no_tarjeta}')`;
        conn.query(query, (err,rows,cols) => {
            if(err){
                res.json({status:0,mensaje: "Error en la base de datos"});
            } else {
                res.json({status:1,mensaje: "Ingresador correctamente", pagos:rows.rows});
            }
        });
    });
}

const client = require('../../config/database');

module.exports = (app) =>{
    app.get("/auto", async function(req,res,next)  {

        var tarjeta = req.query.tarjeta;
        var nombre = req.query.nombre;
        var fecha_venc = req.query.fecha_venc;
        var num_seguridad = req.query.num_seguridad;
        var monto = req.query.monto;
        var tienda = req.query.tienda;
        var formato= req.query.formato;
        var numauto ="-1";
        var resultado = "OK";

        console.log(tarjeta.length);
        console.log(nombre);
        console.log(fecha_venc);
        console.log(num_seguridad);
        console.log(monto);
        console.log(tienda);
        
        

        
        if (typeof tarjeta == "undefined" || tarjeta.length != 16) 
        {
            resultado = "ERROR";
        } 
        else 
        {
            if (typeof nombre == "undefined" || nombre.length == 0) 
            {
                resultado = "ERROR";
            } 
            else 
            {
                if (typeof fecha_venc == "undefined" || fecha_venc.length != 6) 
                {
                    resultado = "ERROR";
                } 
                else 
                {
                    if (typeof num_seguridad == "undefined" || num_seguridad.length != 3) 
                    {
                        resultado = "ERROR";
                    } 
                    else 
                    {
                        if (typeof monto == "undefined" || monto.length ==0) 
                        {
                            resultado = "ERROR";
                        } 
                        else 
                        {
                            if (typeof tienda == "undefined" || tienda.length == 0) 
                            {
                                resultado = "ERROR";
                            } 
                           
                        }
                    }
                }
        
            }
        }




       
        //hasta aqui todo bien, desarrollemos las chivas
        if (resultado != "ERROR")
        {
            let qry = "select miconsumo(cast("+tarjeta+" as bigint), '"+nombre+"', '"+fecha_venc+"', "+num_seguridad+", cast("+monto+" as money), '"+tienda+"') as autorizacion";

       

       

     

            var { rows } = await client.query(qry);

    

            numauto = rows[0].autorizacion;

            console.log(rows[0].autorizacion);

            console.log(numauto);

    

            if (numauto == '0')

            {

                resultado="ERROR";

            }
        }




        if (resultado == "ERROR") {
            if (typeof formato != "undefined" && formato == "json") {
                
                res.json({
                    autentificacion :
                    {
                        emisor:"MASTERCARD",
                        tarjeta: tarjeta,
                        status : "DENEGADO t",
                        numero: "0"
                    }
                });
            } 
            else 
            {
                res.send("<autentificacion><emisor>MASTERCARD</emisor><tarjeta>"+tarjeta+"</tarjeta><status>DENEGADO</status><numero>0</numero></autentificacion>");    
            }
        } else
        {
            if (formato == "json") {
                res.json({
                    autentificacion :
                    {
                        emisor:"MASTERCARD",
                        tarjeta: tarjeta,
                        status : "APROBADO",
                        numero: numauto
                    }
                });
            } 
            else 
            {
                res.send("<autentificacion><emisor>MASTERCARD</emisor><tarjeta>"+tarjeta+"</tarjeta><status>APROBADO</status><numero>"+numauto+"</numero></autentificacion>");    
            }    
        }

      
      
    })
}



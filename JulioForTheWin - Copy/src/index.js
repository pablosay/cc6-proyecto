const app = require('./config/server');
//const conn = require('./config/database');
require('./app/rutas/auto')(app);
app.listen(app.get("PORT"), ()=> console.log(`Servidor en ${app.get("PORT")}`)); 

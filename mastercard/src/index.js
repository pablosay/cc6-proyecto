const app = require('./config/server');
require('./app/routes/ingresar')(app);
require('./app/routes/tarjetas')(app);
app.listen(app.get('port'),
    () => console.log(`server corriendo en puerto ${app.get('port')}`));
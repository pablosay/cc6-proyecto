const {Client} = require('pg');
const client = new Client({
    user: 'app_user',
    host:'127.0.0.1',
    database: 'MASTERCARD_DB',
    password: 'master',
    port:5432
});

client.connect((error) => {
    if (error) {
        console.log("error en la DB");
    }
    else
    {
        console.log("Todo bien");
    }
});

module.exports = client;


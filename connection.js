const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "Debarnab22@",
    database: "gym_website",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err)
        {
            console.log("Connected");
        }
    else
        {
            console.log(err);
        }
});

module.exports = mysqlConnection;


const express = require('express');
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));
app.use(express.static("Images"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html");
})
app.get("/form",function(req,res){
    res.sendFile(__dirname+"/form.html");    
})
app.post("/form",function(req,res){
    var sql = "insert into people values('"+req.body.fname+"','"+req.body.lname+"','"+req.body.phone+"','"+req.body.email+"','"+req.body.gender+"');"
    mysqlConnection.query(sql);
    res.redirect("/");
})
app.use("/people", PeopleRoutes);



app.listen(3000);
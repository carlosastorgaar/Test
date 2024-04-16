const express = require("express");
const app = express();
const mysql = require("mysql");
const { default: App } = require('../client/src/App.jsx');
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database: "usuarios"
});

app.post("/create", (req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;

    db.query('INSERT INTO usuarios(nombre, apellido, edad) VALUE(?,?,?)', [nombre, apellido, edad],
    (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send("Usuario registrado con éxito");
        }
    }
);
});
app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001")
})
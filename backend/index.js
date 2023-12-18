const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(cors());


const connection = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "root",
        database:"yoga",
    }
)

app.post('/form' , (req,res) => {
    const Name = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phone =req.body.PhoneNumber;
    const Batch = req.body.Batch;
    
    connection.query("INSERT INTO customers (Name , email,phone , password ,Batch) VALUES (?,?,?,?,?)" , 
    [Name , email, phone,password ,Batch] ,
    (err,result) =>{
        if(result) res.send(result);
        res.send({message : "err"})
        console.log(err);
    })
})
app.listen(8000,function (){
    console.log('App Listening at PORT 8000');
})
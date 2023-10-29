const express=require("express")
const connection=require("./db")
const paymentRoute = require('./routes/paymentRoute');


require("dotenv").config();

const app=express()
var http = require('http').Server(app);

const PORT=process.env.PORT


app.use('/',paymentRoute);

app.listen(PORT,async()=>{
    console.log("Mongoose connecting");

await connection
console.log("Mongoose connected");
console.log(`Server running at port ${PORT}`);

})








http.listen(3000, function(){
    console.log('Server is running');
});
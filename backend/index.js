require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const mongoDburl= process.env.DATABASE_URL
const routes = require('./routes')
const cors = require('cors');


const app = express()
app.use(express.json())
app.use(cors());

console.log(mongoDburl)
mongoose.connect(mongoDburl).then(()=>console.log("DB onnected")).catch((err)=>console.log("error occured"))
const database = mongoose.connection;

database.on('error',(err)=> console.log("err"))
database.on('connected',()=> console.log("database connected"))


app.use('/api',routes)


app.listen(4000,()=>{
    console.log("App working on 4000 Port")
})
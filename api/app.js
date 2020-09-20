const express= require ("express")
const mongoose= require("mongoose")

const HomeRouter= require("./Routes/HomeRouter")
const cakeRouter=require("./Routes/cakesRouter")
require('dotenv/config')
const cors = require('cors')

const app= express()

//to enable CORS
app.use(cors())

//to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
app.use('/home', HomeRouter)
app.use('/cakes', cakeRouter)

//Connect to DB using compass
mongoose.connect("mongodb://localhost:27017/testdb")
mongoose.connection.once('open',()=>{console.log('connected to db')})


 //Listenning
var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server is running")
})
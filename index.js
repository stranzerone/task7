import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./Routes/routes.js";
import dotenv from "dotenv"
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

dotenv.config();

const URL = process.env.DATABASE

const Connect =async()=>{
try{
const  server = mongoose.connect(URL)

if(server){
    console.log("server connected");
}

}catch(error){
    console.error(error)
}

}


Connect();


app.use('/', route);


app.listen(PORT,()=>{console.log("server started")})
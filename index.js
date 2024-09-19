import User from "./mongooseSchema.js";
import connectDb from "./mongodbConnection.js";
import express from "express";
import path from "path";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());//middle wares to accespt data from request.body
const request=connectDb();//connecting to database here
app.get('/',(req,res)=>{
    res.send('connection success');
    console.log('success');
    
});
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"));
});
app.get('/register',function(req,res){
    res.sendFile(path.join(__dirname,'registration.html'));
})
app.get('/login/register',function(req,res){
    
})
app.listen(port,(req,res)=>{
    console.log("success");
})
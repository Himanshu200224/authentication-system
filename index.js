import express from "express";
import path from "path";
import helmet from "helmet";
import bodyParser from "body-parser";
import connectDb from "./mongodbConnection.js"
import User from "./mongooseSchema.js"
import {__dirname} from "./utils.js"
import { validateUserData} from "./validation.js";
const app = express();
const port = 3000;
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());//middle wares to accespt data from request.body
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

const request = connectDb();//connecting to database here
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/login.html"));
});
app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, './public/registration.html'));
});
app.post('/submit',validateUserData,async function(req,res){
    try{
        const {username,email,password,}=req.body;
    const user=new User({username,email,password});
    await user.save();
    res.json({ success: true, message: 'Data saved successfully' });
    }catch(err){
        res.status(400).json({ success: false, message: 'Failed to save data' });
    }
})
app.listen(port, (req, res) => {
    console.log("success");
});
request.then(()=>{
    console.log("connection ban gaya");
    
})

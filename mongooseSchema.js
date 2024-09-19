import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        maxlength:25,
    },
    email:{
        type:String,
        required:true,
        maxlength:50,
        unique:true,
        lowercase:true,
        default:"somebody@gmail.com",
    },
    password:{
        type:String,
        required:true,
        default:"12345678",
        maxlength:20,
        unique:true,
        lowercase:true,
    },
    mobile:{
        type:Number,
        required:true,
        maxlength:10,
    }
},{timestamps:true});
const User=mongoose.model("User",userSchema);
export default User;
//mongoose.model ek schema bana dega users naam ka on the basis of userSchema mein jo fields define ki jaayengi
//iss file mein validation ka code likha hai ki jaise hi user register button par click karega toh waise hi ek middleware function call hoga ki data sahi format main hai.
import User from "./mongooseSchema.js"
export function validateUserData(req,res,next){
    //function to check ki user data sahi toh enter kar raha hai ki nahi jo ki schema ya user ko enter karna chahiye.
    const {username,email,password,confirm_password}=req.body;
    const existedEmail=User.findOne({email:email});
    if(username=="" || username.length<4 || username.length>25){
        return res.status(400).json({ message: 'Name must be between 3 and 100 characters' });
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if(email=="" || email.length>50 || !emailRegex.test(email)){
        return res.status(400).json({ message: 'pls enter valid email format' });
    }
    if(existedEmail){
        return res.status(400).json({ message: 'User with this email already exists' });
    }
    if(password!=confirm_password){
        return res.status(400).json({message:"check your password"});
    }
    next();
}

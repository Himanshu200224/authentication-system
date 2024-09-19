import mongoose from "mongoose";
//database ko connect karne ka code is here
async function connectDb() {
    try{
        const request= await mongoose.connect("mongodb://localhost:27017/users");//users database ke sath connection form
        return request;
    }catch(err){
        console.error("some error occured " + err);
    }
}
export default connectDb;

import User from "./mongooseSchema.js";
const username=document.querySelector('#fullname').value;
const password=document.querySelector('#password').value;
const email=document.querySelector('#email').value;
const mobile=document.querySelector('#mobile').value;
const button=document.querySelector('#registerUser');
//button par event lagana hai jaise hi uss par click ho toh jo data ka reference le rakha hai woh apne app hi mongodb mein store ho jaaye.
function storeUser(username,mail,password,mobile){
    let user= new User({
        name:this.username,
        email:this.mail,
        password:this.password,
        mobile:this.mobile
    })
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        let user2=storeUser(username,email,password,mob);
        user2.save();
    });
}
export default storeUser;

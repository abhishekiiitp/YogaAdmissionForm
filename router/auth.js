const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

mongoose.set('strictQuery', true);
const DB='mongodb+srv://abhishek_iiitp:abhishek@cluster0.nteny7w.mongodb.net/yogaform?retryWrites=true&w=majority';

mongoose.connect(DB,{
   useNewUrlParser:true,

   useUnifiedTopology:true,
   
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.log("No connection"));

const User=require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send(`Hello world from yoga class router`);
});

router.post('/register',(req,res)=>{
    const{name,email,phone,Gender,Dob,preference}=req.body;

    if(!name || !email || !phone || !Gender || !Dob || !preference)
    {
        return res.status(422).json("plz filled all field");
    }

    User.findOne({email:email}).then((userExist)=>{
        if(userExist)
        {
            return res.status(422).json({error:"Email already exist"});
        }

        const user=new User({name,email,phone,Gender,Dob,preference});

        user.save().then(()=>{
            res.status(201).json({message:"user registered succeesfully"});
        }).catch((err)=>res.status(500).json({error:"failed to register"}));
    }).catch(err => {console.log(err);});

   // res.json({message:req.body});
})

module.exports=router;
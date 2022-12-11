const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Dob:{
        type:String,
        required:true
    },
    preference:{
        type:String,
        required:true
    }

})

const User=mongoose.model('USERS',userSchema);

module.exports=User;
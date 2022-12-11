const express=require('express');
const mongoose=require('mongoose');
const app=express();
mongoose.set('strictQuery', true);
const DB='mongodb+srv://abhishek_iiitp:abhishek@cluster0.nteny7w.mongodb.net/yogaform?retryWrites=true&w=majority';

mongoose.connect(DB,{
   useNewUrlParser:true,

   useUnifiedTopology:true,
   
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.log("No connection"));
app.use(express.json());
app.use(require('./router/auth'));
const User=require('./model/userSchema');

app.get('/',(req,res)=>{
    res.send(`Hello world from yoga class`);
});

app.get('/payment',(req,res)=>{
    res.send(`payment from yoga class`);
});

app.listen(3000,()=>{
    console.log("server running on port number 3000");
})
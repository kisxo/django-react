const mongoose=require('mongoose');
const {connection}=require('../Database/database')
connection();

const user_model=new mongoose.Schema({
    email:{
        required:true,
        type:String,
    },
    username:{
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    }
})

const user=mongoose.model('user_model',user_model)
module.exports=user
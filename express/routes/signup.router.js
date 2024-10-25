const express=require('express');
const router=express.Router();
const path=require('path')
const user_model=require('../models/register.model')
// router.use(express.static(path.join(__dirname, '../reactapp/build')));

// router.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, "../../reactapp/build", 'index.html'))
// })
router.post('/',async  (req, res) => {
    const{email,username,password}=req.body
    if(await user_model.findOne({email})){
        res.send("user already present")
    }
    else{
       let user= user_model.create({
            username:username,
            email:email,
            password:password,

        })
        res.json(user)
    }
    // console.log(req.body.email)


})

module.exports=router
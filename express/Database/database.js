const express=require('express')
const mongoose=require('mongoose');

const connection=()=>{
    console.log("database connected")
    mongoose.connect("mongodb+srv://monboruah0986:hackathon123@cluster0.wty3d.mongodb.net/database1")
}
// connection()

module.exports={connection}
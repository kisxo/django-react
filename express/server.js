const express = require('express');
const app = express()
app.use(express.json())
const path = require('path')
app.use(express.static(path.join(__dirname, '../reactapp/build')));

//database requiring
// const databse=require('./Database/database')

const signup=require('./routes/signup.router')
app.use('/signup',signup)

app.get('/login', (req, res) => {
   res.sendFile(path.join(__dirname, "../reactapp/build", 'index.html'))
    // res.send('hello')

})
app.get('/signup', (req, res) => {
   res.sendFile(path.join(__dirname, "../reactapp/build", 'index.html'))

    // res.send('hello')

})

app.listen(3000, () => {
    console.log("Hello")
})
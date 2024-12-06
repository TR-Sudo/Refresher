const express= require('express')
const app = express()

const logger=require('./logger')


// req => middleware => res


//app.use(logger) you wont need to add logger to every app get

app.get('/', logger,(req,res)=>{// logger is the middleware
    res.send('Home')
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})
const express= require('express')
const app = express()

const logger=require('./logger')
const auth=require('./autorize')

const morgan = require('morgan')



//app.use(logger) you wont need to add logger to every app get
//routes work too app.use('/api',logger)

//app.use([logger,auth])

// build in express middleware

//app.use(express.static('./public'))// loads the page

//third party middleware

app.use(morgan('tiny'))// returns 4 - 1.623 ms how long for the server to respond

// get read data
// post insert data
// put update data
// delete deletes data




app.get('/',(req,res)=>{// logger is the middleware
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)// from middleware
    res.send('Items')
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})
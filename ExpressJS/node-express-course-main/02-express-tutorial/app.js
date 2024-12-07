const express= require('express')
const app = express()

let {people}=require('./data')

//static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({extended:false}))


// parse json since javascript.html is sending json
app.use(express.json())

app.post('/login',(req,res)=>{
    const {name}= req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please enter name")
})
 
app.get('/api/people',(req,res)=>{// javascript.html is looking for json
    res.status(200).json({success: true, data: people})
})

app.post('/api/people',(req,res)=>{// javascript.html is looking for json
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:"Please provide name value"})
    }
    res.status(201).json({success:false,person:name})
})


app.listen(5000,()=>{
    console.log("Server is now listening to port 5000")
})
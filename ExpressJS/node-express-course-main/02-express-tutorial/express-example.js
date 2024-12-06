const express = require('express')

const app = express()

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

/*
app.get('/',(req,res)=>{//anytime the user is performing a get request on our server
    res.status(200).send("<h1>Welcome!</h1>")
})

app.get('/about',(req,res)=>{//anytime the user is performing a get request on our server
    res.status(200).send("<h1>About</h1>")
})

app.all('*',(req,res)=>{//anytime the user is performing any request on our server
    res.status(404).send('<h1>Not Found</h1>')
})
*/

const path=require('path')

// setup static and middleware
// static means file that server doesnt have to change
app.use(express.static('./public'))//common convention is public folder of static files

// index.html is also a static file
/*
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
       Adding to static assets
       Server side rendering (SSR)
    })
*/




app.get('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log("Server is listening on port: 5000")
})
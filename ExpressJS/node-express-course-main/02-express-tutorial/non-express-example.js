console.log('Express Tutorial')


// This is without Express
const {readFileSync} = require('fs')

//get all files
const HomeP= readFileSync('./navbar-app/index.html')
const HomeStyles= readFileSync('./navbar-app/styles.css')
const HomeImage= readFileSync('./navbar-app/logo.svg')
const HomeLogic= readFileSync('./navbar-app/browser-app.js')
// you need to make a const for each style and requirement

const http= require("http")

const server=http.createServer((req,res)=>{
    console.log(req.method,req.url)
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})// status code 200 ok, html type
        res.write(HomeP)
        res.end()//required
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})// status code 200 ok, html type
        res.write('<h1>About Page</h1>')
        res.end()//required
    }else if(req.url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})// status code 200 ok, html type
        res.write(HomeStyles)
        res.end()//required
    }else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})// status code 200 ok, html type
        res.write(HomeImage)
        res.end()//required
    }else if(req.url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})// status code 200 ok, html type
        res.write(HomeLogic)
        res.end()//required
    }else{
        res.writeHead(404,{'content-type':'text/html'})// status code 404 Not Found, html type
        res.write('<h1>Not Found</h1>')
        res.end()//required
    }
    console.log('user hit the server')
    
})

server.listen(5000)
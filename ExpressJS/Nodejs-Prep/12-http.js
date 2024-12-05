const http = require('http') 

const server = http.createServer((request,response) => {
    if(request.url==='/'){
        response.end('Welcome to our home page')
    }
    if(request.url==='/about'){
        response.end('Here is our short history')
    }
    //console.log(request)
    response.end('<h1>Oops</h1><p>We cant find the page you are looking for</p><a href="/">back home</a>')
    
})

server.listen(5000)// listening to port 5000
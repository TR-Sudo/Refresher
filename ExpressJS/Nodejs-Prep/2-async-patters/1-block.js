
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page')
        return;
    }
    if(req.url==='/about'){
        //BLOCKING CODE !!!
        for (let i = 0;i<1000;i++){// will stop other users from recieving page updates
            // always code async
            for (let j = 0;j<1000;j++){
                console.log(`${i},${j}`)
            }
        }
        res.end('About page')
        return;
    }
    res.end("error page")
})

server.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})
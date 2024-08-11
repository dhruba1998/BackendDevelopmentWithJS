
const http = require('http')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.setHeader('Content-Type','text/plain')
        res.statusCode = 200
        res.end('Request processed successfully')
    }
    else{
        res.setHeader('Content-Type','text/json')
        res.statusCode = 404
        res.end('404 Not Found')
    }
})

server.listen(port,hostname,()=> {
    console.log('Server is listening');
    
    
})
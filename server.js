const http=require('http');
const hostname='127.0.0.1';
const port=5000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain')
    if(req.url=='/'){
        res.end('Hello World');
    }
    else if(req.url=='/vigna'){
        res.end('Hello Vigna');
    }
    else{
        res.statusCode=400;
        res.end('Invalid Request');
    }
})
server.listen(port,hostname,()=>{
    console.log(`server runnin at http://${hostname}:${port}/`)
})
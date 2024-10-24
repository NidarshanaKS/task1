const http1=require('http');//importing server library
//Crreating a servver
const webserver=
http1.createServer((req,res)=>{
    res.end("hello");
});
//asssign port number for server
//listening the server
webserver.listen(3500,()=>{
    console.log("this is running");//response to the client
});

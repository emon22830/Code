const http = require('http');
const myServer = http.createServer((rew, res)=>{
     console.log("New Request");
     res.end("Response from server");
});



myServer.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
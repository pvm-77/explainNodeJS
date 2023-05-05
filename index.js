// create server 
const http=require('http')
const app=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end('hello world')
})
const PORT=3001;
app.listen(PORT)

console.log(`server is running on PORT ${PORT}`);
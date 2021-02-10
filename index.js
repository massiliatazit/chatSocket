const router =require('express')()
const server = require ("http").Server(router)
const io = require('socket.io')(server);


const port =5666
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

router.get('/',(req,res)=>{
    res.sendFile(__dirname + "./public/index.html")
})
io.on('connection',(socket)=>{
    console.log('user connected')
    socket.emit('message',(msg)=>{console.log(msg)
    io.emit('message',msg)})// call the event 
    socket.on('another event',(data)=>{
        console.log(data)
    })
})
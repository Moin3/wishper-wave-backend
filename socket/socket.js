import {Server} from "socket.io";
import http from 'http';
import express from 'express';

const app=express()

const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        // origin:['http://localhost:5173'],
        origin:['https://wishper-wave.vercel.app'],
        methods:["GET","POST"]
    }
});


export const getRecieverSocketId=(revieverId)=>{
    return userSocketMap[revieverId]
}

const userSocketMap={} //userId:socketId

io.on('connection',(socket)=>{
    console.log("a user connected",socket.id)

    const userId=socket.handshake.query.userId;
    if(userId !== "undefined") userSocketMap[userId]=socket.id;

    io.emit("getOnlineUsers",Object.keys(userSocketMap));

        //socket io for send message 
        socket.on('sendMessage', (data) => {
            const recieverSocketId=getRecieverSocketId(data.recieverId)
            console.log(recieverSocketId)
            if(recieverSocketId){
                io.to(recieverSocketId).emit('getMessage', data)
            }
        })

    socket.on("disconnect",()=>{
        console.log("User disconnected",socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));

    })
})

export {app,io,server}
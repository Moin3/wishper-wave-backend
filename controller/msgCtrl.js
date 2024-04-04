import Message from "../models/msgModel.js";
import Conversation from '../models/conversationModel.js'
// import { getRecieverSocketId,io } from "../socket/socket.js";


export const newMessage = async (request, response) => {
    try {
        const newMessage = new Message(request.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });

        // socket functionality will goes here
        //  const recieverSocketId=getRecieverSocketId(request.body.recieverId)
        //  console.log(recieverSocketId)
        // if(recieverSocketId){
        //     console.log(recieverSocketId)
        //     io.to(recieverSocketId).emit("newMessage",newMessage)
        //     io.emit("newMessage",newMessage)
        // }

        response.status(200).json({
            newMessage,
            msg:"Message has been sent successfully"
        });
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getMessage = async (request, response) => {
    try {
        const messages = await Message.find({ conversationId: `${request.params.id}` });
        response.status(200).json(messages);

    } catch (error) {
        response.status(500).json(error.message);
    }

}
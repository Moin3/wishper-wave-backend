import Conversation from '../models/conversationModel.js'

export const newConversation = async (req, res) => {
    try{
        const {senderId,receiverId}=req.body
        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})

        if(exist) {
            res.status(200).json('conversation already exists');
            return;
        }
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });
        const savedConversation = await newConversation.save();
        res.status(200).json({
            msg:'conversation saved',
            savedConversation:savedConversation
        });
        
    }catch(err){
        res.status(500).json(err.message);
    }
}

export const getConversation = async (req, res) => {
    try {
        const {senderId,receiverId}=req.body
        const conversation = await Conversation.findOne({ members: { $all: [ senderId, receiverId] }});
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json(error);
    }

}
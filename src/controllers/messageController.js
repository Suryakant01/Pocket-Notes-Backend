import { Group } from "../models/groups.models.js";
import { GroupMessages } from "../models/groupMessages.models.js";

export const addMessage = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const { messageContent } = req.body;
        const groupMessages = new GroupMessages({ messageContent,groupId });

        const group = await Group.findById(groupId);

        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        await groupMessages.save();
        
        // group.groupMessages.push(messageContent);
        group.groupMessages.push(groupMessages._id);
        await group.save();    

        res.status(201).json(groupMessages);

    } catch (error) {
        console.error('Error adding message:', error);
        next(error);
    }
};


export const getMessages = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const groupMessages = await GroupMessages.find({ groupId });
        res.status(200).json(groupMessages);
    } catch (error) {
        next(error);
    }
};
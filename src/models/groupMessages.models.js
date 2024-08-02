import mongoose from "mongoose";

const groupMessageSchema = new mongoose.Schema(
    {
        messageContent: {
            type: String,
            required: true,
        },

        groupId: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Group",
                required: true
            },
        
    },
    {
        timestamps: true,
    }
)

export const GroupMessages = mongoose.model("GroupMessages", groupMessageSchema)
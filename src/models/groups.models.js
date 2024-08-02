import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
    {
        groupName: {
            type: String,
            required: true,
            // unique: true,
        },

        groupMessages: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "GroupMessages"
        },
    ]

    },
    {
        timestamps: true,
    }
)

export const Group = mongoose.model("Group", groupSchema)
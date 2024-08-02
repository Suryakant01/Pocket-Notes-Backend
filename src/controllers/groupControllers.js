import { Group } from "../models/groups.models.js";

export const createGroup = async (req, res, next) => {
    try {
        const { groupName } = req.body;
        const group = new Group({ groupName });
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        next(error);
    }
};

export const getGroups = async (req, res, next) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (error) {
        next(error);
    }
};
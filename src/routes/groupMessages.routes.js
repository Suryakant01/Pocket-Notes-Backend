import { Router } from "express";
import {addMessage, getMessages } from "../controllers/messageController.js"


const router = Router();

router.post('/:groupId/messages', addMessage);
router.get('/:groupId/messages', getMessages);
// router.route("/create-msg").post()
// router.route("/get-msg").get()

export default router
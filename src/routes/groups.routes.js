import { Router } from "express";
import {createGroup, getGroups} from "../controllers/groupControllers.js"


const router = Router();

router.post('/', createGroup);
router.get('/', getGroups);

// router.route("/create-group", createGroup).post()
// router.route("/get-group",getGroups).get()

export default router
import express from "express";
import {addPost, getPost} from "../controllers/post.js";

const router = express.Router();
router.post("/addPost", addPost);
router.post("/getPost", getPost);
export default router;
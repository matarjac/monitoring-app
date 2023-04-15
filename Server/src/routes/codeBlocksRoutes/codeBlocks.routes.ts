import express from "express";
import { getAllCodeBlocks } from "../../controllers/codeBlocksControllers/codeBlocks.controllers";

const router = express.Router();
router.get("/", getAllCodeBlocks);
export default router;
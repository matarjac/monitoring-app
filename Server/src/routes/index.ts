import express from "express";
import codeBlocks from "./codeBlocksRoutes/codeBlocks.routes";
const router = express.Router();

router.use("/codeBlocks", codeBlocks);

export default router;
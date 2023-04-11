import {Request, Response} from "express";
import { getCodeBlocks } from "../../services/codeBlocksServices/codeBlocks.services";

export const getAllCodeBlocks = async (req: Request, res: Response) => {
    try {
        const codeBlocks = await getCodeBlocks();
        console.log(codeBlocks);
        return res
            .status(200)
            .json(codeBlocks)
    }
    catch (err: any) {
        console.log(err);
        throw err;
    }

}

export default getAllCodeBlocks;
import { ICodeBlock, CodeBlockModel } from "../../model/codeBlocksModel/codeBlock.model";

export const getCodeBlocks = async () => {
    try {
        const codeBlocks: ICodeBlock[] = await CodeBlockModel.find();
        return codeBlocks;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}


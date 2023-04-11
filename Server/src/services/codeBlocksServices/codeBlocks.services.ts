import { ICodeBlock, CodeBlockModel } from "../../model/codeBlocksModel/codeBlock.model";

export const getCodeBlocks = async () => {
    try {
        const codeBlocks: ICodeBlock[] = await CodeBlockModel.find();
        console.log(codeBlocks);
        return codeBlocks;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}


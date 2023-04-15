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

export const updateCodeBlock = async (codeID: string, updatedCode: string) => {
    try {
        await CodeBlockModel.updateOne(
            { _id: codeID },
            {
                $set: { ["code"]: updatedCode }
            });
        console.log('document updated successfully');

    } catch (err) {
        throw err;
    }
}


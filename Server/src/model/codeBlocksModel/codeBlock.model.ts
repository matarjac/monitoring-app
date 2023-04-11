import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface ICodeBlock {
    code: string
}

export const codeBlockSchema = new Schema<ICodeBlock>({
    code: {type: String, required: true}
})

export const CodeBlockModel = mongoose.model<ICodeBlock>("codeBlocks", codeBlockSchema)
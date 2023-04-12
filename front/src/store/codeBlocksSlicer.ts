import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

interface ICodeBlock {
    name: string,
    code: string
}

const getAllCodeBlocks = axios.get('http://localhost:8000/codeBlocks');
const { data } = await getAllCodeBlocks;

export const codeBlocksSlicer = createSlice({
    name: "codeBlocks",
    initialState: {
        value: data
    },
    reducers: {}
})

export default codeBlocksSlicer.reducer;
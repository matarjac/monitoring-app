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
        value: data,
        mentorID: ''
    },
    reducers: {
        setMentor: (state, action) => {
            const id = action.payload;
            state.mentorID = id;
            console.log(state.mentorID);
        }
    }
})

export const { setMentor } = codeBlocksSlicer.actions;
export default codeBlocksSlicer.reducer;
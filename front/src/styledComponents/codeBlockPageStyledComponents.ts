import styled from "styled-components";

export const CodeBlockContainer = styled.div`
    height: 80vh;
    width: 70vw;
    background-color: white;
    border-radius: 16px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const CodeBlockHeader = styled.div`
    background-color: rgb(25, 21, 97);
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    border-radius: 16px 16px 0 0;
`
export const CodeBlockHeaderTitle = styled.span`
    color: white;
    font-size: 20px;
`

export const CodeBlockBody = styled.div`
    padding: 40px;
    width: 100%;
`

export const CodeTextArea = styled.textarea`
    all: unset;
    font-size: 18px;
    color: transparent;
    width: 70%;
    height:60%;
    position:absolute;

`
export const CodeTag = styled.code`
    all: unset;
    font-size: 18px;
    color: black;
    width: 70%;
    height:60%;
    line-break: pre-wrap;
    position:absolute;
    
`
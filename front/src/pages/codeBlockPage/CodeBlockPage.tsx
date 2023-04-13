import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IStore } from "../../interfaces/IStore";
import { CodeTextArea, CodeBlockContainer, CodeTag, CodeBlockHeader, CodeBlockBody, CodeBlockHeaderTitle } from "../../styledComponents/codeBlockPageStyledComponents";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/default.css';
import "highlight.js/styles/github.css";
import io from 'socket.io-client';


export const CodeBlockPage: React.FC = () => {
    const socket = io('http://localhost:8000');

    const { id = '' } = useParams();
    const codeBlocksData = useSelector((state: IStore) => state.codeBlocks.value);
    const currentCodeBlock = codeBlocksData.filter((codeBlock) => codeBlock._id === id);
    const [codeBlockCode, setCodeBlockCode] = useState(currentCodeBlock[0].code);
    const [codeBlockArr, setCodeBlockArr] = useState([codeBlockCode]);
    const [codeBlockName, setCodeBlockName] = useState(currentCodeBlock[0].name);
    const [isMentor, setIsMentor] = useState(false);


    const emitChange = () => {
        socket.emit('change_code', { code: codeBlockCode })
    };

    useEffect(() => {
        socket.on('users_count', (data) => {
            console.log("users>>> ", data);
        })
    }, []);

    useEffect(() => {
        socket.on("receive_code_change", (data) => {
            setCodeBlockCode(data.code);
        })
    }, [socket]);


    const handleTextChange = (e: any) => {
        const newText = e.target.value;
        const newString = newText.split("\n");
        setCodeBlockArr(newString);
        setCodeBlockCode(e.target.value);
        emitChange();
    }

    return (
        <>
            <CodeBlockContainer>
                <CodeBlockHeader>
                    <CodeBlockHeaderTitle>{codeBlockName}</CodeBlockHeaderTitle>
                    <CodeBlockHeaderTitle>JavaScript</CodeBlockHeaderTitle>
                </CodeBlockHeader>
                <CodeBlockBody>
                    <CodeTag>{codeBlockCode}</CodeTag>
                    <CodeTextArea value={codeBlockCode} readOnly={isMentor} onChange={(e) => handleTextChange(e)} />
                </CodeBlockBody>
            </CodeBlockContainer>
            {/* <button onClick={() => { sendMessage() }}>send Message to server</button> */}
        </>
    )
}

export default CodeBlockPage;

// const codeRef = useRef<HTMLDivElement>(null);
// hljs.registerLanguage('javascript', javascript);
// useEffect(() => {

// if (codeRef.current) {
//     hljs.highlightElement(codeRef.current);
//     hljs.highlightElement(codeRef.current);
// }
// }, [codeBlockCode]);
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { LobbyContainer, LobbyTitle, LobbyItemsContainer, CodeBlockCube, LobbyCodeBlockCubesContainer } from "../../styledComponents/lobbyStyledComponents";

interface ICodeBlock {
    _id: string,
    name: string,
    code: string
}

const Lobby: React.FC = () => {
    const [codeBlocksList, setCodeBlocksList] = useState([]);

    // const fetchCodeBlocks = async () => {
    //     try {
    //         const { data } = await axios.get('http://localhost:8000/codeBlocks');
    //         setCodeBlocksList(data);
    //         console.log(codeBlocksList);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    useEffect(() => {
        axios.get('http://localhost:8000/codeBlocks')
            .then(response => {
                setCodeBlocksList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        console.log(codeBlocksList);
    }, []);
    return (
        <LobbyContainer>
            <LobbyItemsContainer>
                <LobbyTitle>
                    Choose a code Block
                </LobbyTitle>
            </LobbyItemsContainer>

            <LobbyCodeBlockCubesContainer>
                <CodeBlockCube>CodeBlock</CodeBlockCube>
                <CodeBlockCube>CodeBlock</CodeBlockCube>
                <CodeBlockCube>CodeBlock</CodeBlockCube>
                <CodeBlockCube>CodeBlock</CodeBlockCube>
            </LobbyCodeBlockCubesContainer>
        </LobbyContainer>
    )
}

export default Lobby;
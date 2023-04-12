import React, { useEffect, useState } from "react";
import axios from 'axios';
import { LobbyContainer, LobbyTitle, LobbyItemsContainer, CodeBlockCube, LobbyCodeBlockCubesContainer } from "../../styledComponents/lobbyStyledComponents";
import { useSelector } from "react-redux";
import ICodeBlock from "../../interfaces/ICodeBlock";
import { IStore } from "../../interfaces/IStore";

const Lobby: React.FC = () => {
    const codeBlocksData = useSelector((state: IStore) => state.codeBlocks.value);
    const [codeBlocksList, setCodeBlocksList] = useState(codeBlocksData);

    useEffect(() => {
        console.log('store data>>>', codeBlocksList);
    }, []);
    return (
        <LobbyContainer>
            <LobbyItemsContainer>
                <LobbyTitle>
                    Choose a code Block
                </LobbyTitle>
            </LobbyItemsContainer>

            <LobbyCodeBlockCubesContainer>
                {codeBlocksList.map((codeBlock, index) => (
                    <CodeBlockCube key={index}>{codeBlock.name}</CodeBlockCube>
                ))}
            </LobbyCodeBlockCubesContainer>
        </LobbyContainer>
    )
}

export default Lobby;
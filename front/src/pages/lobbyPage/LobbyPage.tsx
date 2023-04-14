import React, { useEffect, useState } from "react";
import axios from 'axios';
import { LobbyContainer, LobbyTitle, LobbyItemsContainer, CodeBlockCube, LobbyCodeBlockCubesContainer } from "../../styledComponents/lobbyStyledComponents";
import { useSelector } from "react-redux";
import ICodeBlock from "../../interfaces/ICodeBlock";
import { IStore } from "../../interfaces/IStore";
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';

const Lobby: React.FC = () => {
    const codeBlocksData = useSelector((state: IStore) => state.codeBlocks.value);
    const [codeBlocksList, setCodeBlocksList] = useState(codeBlocksData);
    const navigation = useNavigate();

    return (
        <LobbyContainer>
            <LobbyItemsContainer>
                <LobbyTitle>
                    Choose a code Block
                </LobbyTitle>
            </LobbyItemsContainer>

            <LobbyCodeBlockCubesContainer>
                {codeBlocksList.map((codeBlock, index) => (
                    <CodeBlockCube onClick={() => { navigation(`code-block/${codeBlock._id}`) }} key={index}>{codeBlock.name}</CodeBlockCube>
                ))}
            </LobbyCodeBlockCubesContainer>
        </LobbyContainer>
    )
}

export default Lobby;
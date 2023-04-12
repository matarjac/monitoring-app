import React from 'react';
import logo from './logo.svg';
import Lobby from './pages/lobbyPage/LobbyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          {/* <Route path="/code-block/:id" element={<CodeBlockPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

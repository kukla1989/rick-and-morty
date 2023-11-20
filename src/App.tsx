import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { Character } from './components/CharacterPage/Character';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/character" element={<Character />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
};

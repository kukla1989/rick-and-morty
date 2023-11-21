import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { Main } from './components/Main/Main';
import { Character } from './components/CharacterPage/Character';
import { NotFound } from './components/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/character" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

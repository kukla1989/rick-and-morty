import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';

export const App: React.FC = () => (
  <div className="App">
    <Header />
    <Outlet />
  </div>
);

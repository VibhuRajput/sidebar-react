import React from 'react';
import './index.css';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';

export default function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

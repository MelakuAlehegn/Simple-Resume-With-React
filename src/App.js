import React from 'react';
import Experience from './components/Experience';
import Header from './components/Header';
import Skills from './components/Skills';
import Input from './components/Input';
import Button from './components/Buttons';
import './index.css'


export default function App() {
  return (
    <div className="container">
      <Header />
      <Experience />
      <Skills />
      <Input />
      <Button />
    </div>
  );
}

import React from 'react';
import Experience from './components/Experience';
import Header from './components/Header';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Experience />
      <Skills />
    </div>
  );
}

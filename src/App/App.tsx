import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MainWrapper } from '../MainWrapper /MainWrapper ';


function App() {
  return (
    <div className="App">
      <Header />
      <MainWrapper />
      <Footer />
    </div>
  );
}

export default App;

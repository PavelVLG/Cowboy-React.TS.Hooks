import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainWrapper } from "../Component/MainWrapper/MainWrapper";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainWrapper />
      <Footer />
    </div>
  );
};

export default App;

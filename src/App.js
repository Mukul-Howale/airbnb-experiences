import React from 'react';
import Navbar from "./components/Navbar.js";
import TitleImage from "./components/TitleImage.js";
import Description from "./components/Description.js";
import Experiences from "./components/Experiences.js";
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <TitleImage/>
      <Description/>
      <Experiences/>
    </div>
  );
}

export default App;

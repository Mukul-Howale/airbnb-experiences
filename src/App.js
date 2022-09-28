import React from 'react';
import Navbar from './components/Navbar';
import TitleImage from "./components/TitleImage";
import Description from "./components/Description";
import Experiences from "./components/Experiences";
import './styles/App.css';

function App() {
  return (
    <>
      <Navbar/>
      <TitleImage/>
      <Description/>
      <Experiences/>
    </>
  )
}

export default App;

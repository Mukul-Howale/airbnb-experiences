import React from 'react';
import Navbar from './components/Navbar';
import TitleImage from "./components/TitleImage";
import Description from "./components/Description";
import Experiences from "./components/Experiences";
import swimmer from "./images/swimmer.png";
import './styles/App.css';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <TitleImage/>
      <Description/>
      <div className='cards'>
        <Experiences
          thumbnail = {swimmer}
          rating = {5.0}
          review = {6}
          country = "USA"
          title = "Life lessons with Katie Zaferes"
          price = {136}
        />
      </div>
    </div>
  )
}

export default App;

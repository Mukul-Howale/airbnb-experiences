import React from 'react';
import Navbar from './components/Navbar';
import TitleImage from "./components/TitleImage";
import Description from "./components/Description";
import Experiences from "./components/Experiences";
import cardsData from "./Data";
import './styles/App.css';

function App() {
  const card = cardsData.map(data => {
    return (
      <Experiences
        key = {data.id}
        {...data}
      />
    )
  })
  return (
    <div className='app'>
      <Navbar/>
      <TitleImage/>
      <Description/>
      <div className='cards'>
        {card}
      </div>
    </div>
  )
}

export default App;

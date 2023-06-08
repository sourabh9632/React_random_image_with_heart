import React from 'react'
import Wlecome from './components/Wlecome';
import Register from './components/Register';
import Animale from './components/Animalfgh';
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { useState } from 'react';

function getRandomanimal() {  
  const animals = ['bird', 'cat', 'cow', 'dog' ,"gator","horse"];

  return animals[Math.floor(Math.random() * animals.length)];

}

console.log(getRandomanimal())
 






function App() {
const [animals,setAnimals] = useState([""]);

  const handleClick = () => {
    setAnimals([...animals,getRandomanimal()]);
  }

  
  const renderAnimal = animals.map((animal,index)=>{
  return <Animale type={animal} key={index}/>
  })

   
  
  return (
    <div className='app'>

      <button onClick={handleClick}>Animal Button</button>


      <div>{renderAnimal}</div>
    </div>
  );
}

export default App;

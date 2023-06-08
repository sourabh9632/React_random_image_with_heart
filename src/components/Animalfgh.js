import React from 'react'
 
import bird from "../svg/bird.svg"
import cat from "../svg/cat.svg"
import cow from "../svg/cow.svg"
import dog from "../svg/dog.svg"
import gator from "../svg/gator.svg"
import heart from "../svg/heart.svg"
import horse from "../svg/horse.svg"
import { useState } from 'react'



const svhMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,

}





const Animalfgh = ({type}) => {
  const [click ,setClicks] = useState(0);

  const handleClick = () => {

    setClicks(click+1);
    
    };
  return (
    <div className='animal-show' onClick={handleClick}>

    <img className='animal' src={svhMap[type]}/> 
    <img   className='heart' src={heart} style={{width:10 + 10 * click + 'px'}}/> 
    </div>
  )
}

export default Animalfgh;
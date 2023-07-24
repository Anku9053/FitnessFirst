import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return (
    <div style={{textAlign:"center",position:"relative",left:"10%"}}>

    <span className='stroke-text' style={{fontSize:"40px",color:"white"}}>{currentText}</span>
    {/* <span className='stroke-text' style={{fontSize:"40px",color:"white"}}>{currentText}</span>; */}
    </div>
  )
};

export default Typewriter;
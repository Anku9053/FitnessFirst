import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Typewriter.css';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(text);

  // Set the current text and update the ref when the 'text' prop changes
  useEffect(() => {
    textRef.current = text;
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (currentIndex < textRef.current.length) {
        setCurrentText(prevText => prevText + textRef.current[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, delay);

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, delay]);

  return (
    <div style={{ textAlign: 'center', position: 'relative', left: '10%' }}>
      <span className='stroke-text' style={{ fontSize: '40px', color: 'white' }}>
        {currentText}
      </span>
    </div>
  );
};

export default Typewriter;

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let i = 0;
    const speed = 100; 

    const typeWriter = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setIsBlinking(false);
      }
    };

    typeWriter();
  }, [text]);

  return (
    <div>
      <span>{displayedText}</span>
      <span className={`cursor ${isBlinking ? 'blinking' : ''}`}>|</span>
    </div>
  );
};

export default Typewriter;

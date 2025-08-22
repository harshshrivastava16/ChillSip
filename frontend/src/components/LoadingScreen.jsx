import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const fullText = "This is a prototype website. All the pricing images are just prototype and we are launching soon.";

  useEffect(() => {
    // Typewriter animation
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50); // Speed of typing

      return () => clearTimeout(timer);
    } else {
      // Animation complete, wait a moment then hide
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        setShowCursor(false);
        
        // Wait for fade out animation to complete
        const hideTimer = setTimeout(() => {
          onComplete();
        }, 500);
        
        return () => clearTimeout(hideTimer);
      }, 1000); // Wait 1 second after typing completes
      
      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex, fullText, onComplete]);

  useEffect(() => {
    // Blinking cursor effect
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={`
      fixed inset-0 bg-black z-50 flex items-center justify-center 
      transition-opacity duration-500 ease-in-out
      ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}
    `}>
      <div className="text-white text-center px-6 max-w-2xl">
        <div className="text-xl md:text-2xl font-mono">
          {currentText}
          <span className={`
            ml-1 bg-white
            ${showCursor ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-100
          `}>
            █
          </span>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          Loading your experience...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

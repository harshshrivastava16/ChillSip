import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const fullText =
    "Please note: This website is a prototype. All images and prices displayed are for demonstration purposes only and do not represent the company’s actual offerings. We are launching soon.";

  // ⏱ Typing speed adjusts based on text length
  const typingSpeed =
    fullText.length > 120 ? 30 : fullText.length > 80 ? 40 : 50;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      // When typing finishes, wait a sec, then fade out
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        setShowCursor(false);

        // Then fire onComplete after fade-out
        const hideTimer = setTimeout(() => {
          onComplete();
        }, 500);

        return () => clearTimeout(hideTimer);
      }, 1000);

      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex, onComplete, isComplete, typingSpeed, fullText]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 bg-black z-50 flex items-center justify-center 
        transition-opacity duration-500 ease-in-out
        ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <div className="text-white text-center px-6 max-w-2xl">
        <div className="text-xl md:text-2xl font-mono">
          {currentText}
          <span
            className={`
              ml-1 bg-white
              ${showCursor ? 'opacity-100' : 'opacity-0'}
              transition-opacity duration-100
            `}
          >
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

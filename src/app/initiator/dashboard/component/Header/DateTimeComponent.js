// DateTimeComponent.js
import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };

      const formattedDateTime = currentDate.toLocaleDateString('en-US', options);
      setCurrentDateTime(formattedDateTime);
    };

    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <span>{currentDateTime}</span>;
};

export default DateTimeComponent;

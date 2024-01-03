'use client'
import { useEffect,useState } from "react";
export default function Header (){
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Function to update time and date
    const updateTimeAndDate = () => {
      const now = new Date();
      const optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const timeString = now.toLocaleTimeString('en-US', optionsTime);

      const optionsDate = { day: 'numeric', month: 'short', year: 'numeric' };
      const dateString = now.toLocaleDateString('en-US', optionsDate);

      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    // Update time and date every second
    const intervalId = setInterval(updateTimeAndDate, 1000);

    // Initial update
    updateTimeAndDate();

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
    return(
        <>
       <div className="w3-bar w3-blue w3-hide-small">
  <div href="#" className="w3-bar-item w3-left w3-button w3-mobile ">
 CGTECH INVESTMENT LIMITED

  </div>
  
  <div className="w3-bar-item w3-right w3-button w3-mobile">
  <i class="fa fa-bell"></i>
  </div>
  <div href="#" className="w3-bar-item w3-right w3-button w3-mobile">
  <i class="fa fa-envelope-o"></i>  
    
  </div>
 
 
  <div href="#" className="w3-bar-item w3-right w3-button w3-mobile">
  {currentTime && currentTime}
  </div>
  <div href="#" className="w3-bar-item w3-right w3-button w3-mobile">
  <i class="fa fa-calendar"></i>  {currentDate && currentDate}
  </div>

  
</div>

        </>
    )
}
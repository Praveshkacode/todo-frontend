import { useEffect, useState } from "react";

function DisplayTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date()); 
    }, 1000); 

    return () => {
      clearInterval(interval); 
    };
  }, []); 

  return (
    <div className="date-time">
      <p>{dateTime.toLocaleString()}</p>
    </div>
  );
}

export default DisplayTime;

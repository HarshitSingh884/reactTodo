import React, { useEffect, useState } from "react";

const TodoDate = () => {
      const [currentDateTime, setCurrentDateTime] = useState("");

      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const formattedDate = now.toLocaleDateString();
          const formattedTime = now.toLocaleTimeString();
          setCurrentDateTime(`${formattedDate} - ${formattedTime}`);
        }, [1000]);
    
        return () => clearInterval(interval);
      }, []);



  return <h2>{currentDateTime}</h2>;
};

export default TodoDate;

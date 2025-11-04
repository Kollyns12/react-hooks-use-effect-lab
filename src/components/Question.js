import React, { useEffect, useState } from "react";

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timeRemaining === 1) {
        onAnswered(false);
        setTimeRemaining(10);
      } else {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;






import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
    // we can add a parameter to our custom hook components, in this case, "forwards" to dictate that our default is we're counting "forward"
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
  //  we can return anything we want in our custom hook components (arrays, objects, or in this case, our "counter" variable)
};

export default useCounter;

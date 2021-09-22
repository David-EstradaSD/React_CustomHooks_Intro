import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter(); 
  // since useCounter() returns a "counter", we can also store it into a local variable "counter" here.
  // we don't need to pass the argument of "true" into our useCounter() since it's already the default in our use-counter custom hook component. 

  return <Card>{counter}</Card>;
};

export default ForwardCounter;

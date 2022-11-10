import styles from './clickCount.module.scss'
import React, { useState } from 'react';
import { useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
useEffect(() => {
console.log(`I have been clicked ${count} times`);
}, [count]);
return (
<div>
<button onClick={() => setCount(count + 1)}>Click me!</button>
</div>
);
  
}
export default Example
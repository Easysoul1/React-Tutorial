import React from 'react'
import { useState } from 'react'
const Start = ({name, age}) => {
  const [count, setCount] = useState(1);
  const handleClick = ()=> {
    setCount(count + 5);
  };
  return (
    <div>
       <h2>My name is {name}, I am {age} years old</h2>
       <button onClick={handleClick}> Click me {count} times</button>
    </div>
  )
}

export default Start
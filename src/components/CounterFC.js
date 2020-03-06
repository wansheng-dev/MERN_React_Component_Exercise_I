import React, { useState } from 'react';

function CounterFC (props){
  
  const [currentAge, setCurrentAge] = useState(props.age);

  function handleClick() {
    setCurrentAge(currentAge + 1);
  }
  
  return (
    <div>
      <h5> This is done using Functional Component! </h5>
      <h2> { props.firstName } { props.lastName} </h2>
      <p> Age: { currentAge } </p>
      <p> Hair Color: { props.hairColor } </p>
      <button onClick={ handleClick }> Birthday button for { props.firstName } { props.lastName } </button>
    </div>
  )
}

export default CounterFC;
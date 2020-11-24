import React from 'react';

// State-less component because it does not manage state.
const person = (props) => {
  const { name, age } = props;
  return (
    <div>
      <p>I'm {name} and I am {age} years old!</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;
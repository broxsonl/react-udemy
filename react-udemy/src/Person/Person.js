import React from 'react';
import './Person.css';

// State-less component because it does not manage state.
const person = (props) => {
  const { name, age } = props;
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {name} and I am {age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default person;
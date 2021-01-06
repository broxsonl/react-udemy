import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`

// State-less component because it does not manage state.
const person = (props) => {
  const { name, age } = props;
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };
  return (
    <StyledDiv>
      <p onClick={props.click}>I'm {name} and I am {age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
}

export default person;
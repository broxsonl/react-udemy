import React from 'react';

const userOutput = (props) => {
  const { userName } = props;

  return (
    <div>
      <p>{userName}</p>
      <p>Fuzzy Bear</p>
      <p>Banana Brain Man</p>
    </div>
  );
}

export default userOutput;
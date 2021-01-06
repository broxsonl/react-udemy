import React from 'react';

const validationComponent = (props) => {
  const stringLength = props.stringLength;
  const validationMessage = stringLength > 5 ? 'Text long enough' : 'Text too short';

  return (
    <div>
      {validationMessage}
    </div>
  )
}

export default validationComponent
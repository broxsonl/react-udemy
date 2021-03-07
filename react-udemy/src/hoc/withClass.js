import React from 'react';

// ...props spreads the key value pairs of the props onto the component. Awesome.
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
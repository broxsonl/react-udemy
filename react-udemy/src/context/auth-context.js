import React from 'react';

// an object created by createContext is a "globally available object, array, string, etc"
// it CAN be globally available, but you're really setting where it is available by wrapping
// whatever elements you want to have access to it with this component
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
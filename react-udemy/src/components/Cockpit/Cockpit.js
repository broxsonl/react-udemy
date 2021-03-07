import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = props => {
  // functional component requires the use of the react hook, rather than React.createRef()
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext)

  // useEffect hook runs after the component has been rendered/mounted
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Would be a good spot to put http requests here

    toggleButtonRef.current.click();

    // can return a function from the useEffect hook that will run when the component is removed from DOM
    // return () => {
    //   clearTimeout(timer);
    //   console.log('[Cockpit.js] cleanup work in useEffect')
    // }
  }, [])
  // array items above are all the variables that useEffect will run on ONLY. Otherwise it runs on everything
  // if array is empty, it will ONLY run the first time it runs and not again

  // can have multiple useEffect hooks
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  });

  const assignedClasses = [];

  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
      <button className={btnClass} onClick={authContext.login}>Log in</button>
    </div>
  )
};

// memo wrapping the export allows storing a snapshot of the component,
// and only if the inputs change will it be re-rendered inputs = props passed in
export default React.memo(cockpit);
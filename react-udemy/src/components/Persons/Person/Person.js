import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

// State-less component because it does not manage state.

// adjacent elements can be returned in render hook as an array of dom elements
class Person extends Component {
  constructor(props) {
    super(props);

    // create a ref and then add a key of inputElementRef to
    // this class, which is then accessible when the DOM elements below are
    // renders, and is set to the value of the ref attr
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this runs every time the component renders, so if there's multiple, the focus
    // will always be on the final instance of the component that gets rendered
    // 'current' method on the ref comes from the createRef call that created inputElementRef
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    const { name, age } = this.props;
    return (
      <Aux>
          {
            this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        <p onClick={this.props.click}>I'm {name} and I am {age} years old!</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
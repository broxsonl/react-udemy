import React, { Component } from 'react';
import classes from './App.css';
import PersonList from '../components/Persons/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

// state-ful component because it does manage state
// Also called 'smart' or 'container' components
class App extends Component {

  constructor(props) {
    super(props);

    console.log(('[App.js] constructor'));
  }

  // state keyword is only available in components that extend Component
  // if state or props changes--since it's a special prop--it will re-render the DOM
  state = {
    persons: [
      { id: 'ab123', name: 'Lee', age: 36 },
      { id: 'cd456', name: 'Heather', age: 34 },
      { id: 'ef789', name: 'Jess', age: 32 },
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);

    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');

    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // typically use 'handler' in var name to denote it is an event handler
  switchNameHandler = (newName) => {
    // DON'T SET STATE DIRECTLY: this.state.persons[0].setState('name' = 'LeeBanana'
    this.setState({ persons: [
      { id: 'ab123', name: newName, age: 36 },
      { id: 'cd456', name: 'Heather', age: 27 },
      { id: 'ef789', name: 'Jess', age: 32 },
    ]})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex],
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    // need to pass in a function if any setting state depends on old
    // state to ensure prev state is always the prev state that we want
    // async state changes can mess this up if we don't pass a fn as the arg,
    // and instead only pass the state object being updated
    this.setState((prevState, props) => {
      return {
        persons,
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    const personsCopy = [...this.state.persons];

    personsCopy.splice(personIndex, 1);

    this.setState({ persons: personsCopy });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  authenticateUser = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <PersonList 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}>Remove cockpit</button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.authenticateUser}}>
          {this.state.showCockpit
            ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
            : null}

          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

import React, { Component } from 'react';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import './App.css';

// state-ful component because it does manage state
// Also called 'smart' or 'container' components
class App extends Component {
  // state keyword is only available in components that extend Component
  // if state or props changes--since it's a special prop--it will re-render the DOM
  state = {
    persons: [
      { id: 'ab123', name: 'Lee', age: 36 },
      { id: 'cd456', name: 'Heather', age: 34 },
      { id: 'ef789', name: 'Jess', age: 32 },
    ],
    showPersons: false,
  }

  // typically use 'handler' in var name to denote it is an event handler
  switchNameHandler = (newName) => {
    // DON'T SET STATE DIRECTLY: this.state.persons[0].setState('name' = 'LeeBanana'
    this.setState({persons: [
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

    this.setState({
      persons,
    })
  }

  deletePersonHandler = (personIndex) => {
    const personsCopy = [...this.state.persons];

    personsCopy.splice(personIndex, 1);

    this.setState({ persons: personsCopy });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  inputCharsHandler = (event) => {
    const outputString = event && event.target && event.target.value;
    const charsArray = outputString.split('');

    this.setState(
      {
        charsArray,
        outputLength: charsArray.length
      });
  }

  deleteCharsHandler = (charIndex) => {
    const charsCopy = [...this.state.charsArray];

    charsCopy.splice(charIndex, 1);

    this.setState({ charsArray: charsCopy })
  }

  render() {
    // const buttonStyle = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //   },
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}

              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      );

      // buttonStyle.backgroundColor = 'red';
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <=1) {
      classes.push('bold');
    }

    let chars = null;
    if (this.state && this.state.charsArray) {
      chars = (
        <div>
          {this.state.charsArray.map((char, index) => {
            return <CharComponent
              char={char}
              click={() => this.deleteCharsHandler(index)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}

        <input
          type="text"
          onChange={(event) => this.inputCharsHandler(event)}
        />
        <p>{this.state.outputLength}</p>
        <ValidationComponent stringLength={this.state.outputLength} />
        {chars}



      </div>
      // <h1>Another heading</h1> Not best practice; only a single wrapping element, ie, App div
    );

    // Below is what the above jsx returned code is doing under the hood
    //
    // first arg = element to render
    // second arg = configurations
    // third and any additional args = any children
    // plain text = text; need to pass React.createElement again to attach children.
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this work now?')
    // )
  }
}

export default App;

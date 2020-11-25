import React, { Component } from 'react';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

// state-ful component because it does manage state
// Also called 'smart' or 'container' components
class App extends Component {
  // state keyword is only available in components that extend Component
  // if state or props changes--since it's a special prop--it will re-render the DOM
  state = {
    persons: [
      { name: 'Lee', age: 36 },
      { name: 'Heather', age: 34 },
      { name: 'Jess', age: 32 },
    ],
    showPersons: false,
  }

  // typically use 'handler' in var name to denote it is an event handler
  switchNameHandler = (newName) => {
    // DON'T SET STATE DIRECTLY: this.state.persons[0].setState('name' = 'LeeBanana'
    this.setState({persons: [
      { name: newName, age: 36 },
      { name: 'Heather', age: 27 },
      { name: 'Jess', age: 32 },
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Lee', age: 36 },
        { name: event.target.value, age: 27 },
        { name: 'Jess', age: 32 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() { 
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={buttonStyle}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </button>
        {
          this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'STRAWBERRYLEE')}
                changed={this.nameChangedHandler}
              >
                My Hobbies: Racing
              </Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
              />
            </div> : null
      }
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

import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

// state-ful component because it does manage state
class App extends Component {
  // state keyword is only available in components that extend Component
  // if state or props changes--since it's a special prop--it will re-render the DOM
  state = {
    persons: [
      { name: 'Lee', age: 36 },
      { name: 'Heather', age: 34 },
      { name: 'Jess', age: 32 },
    ]
  }

  // typically use 'handler' in var name to denote it is an event handler
  switchNameHandler = () => {
    // DON\'T SET STATE DIRECTLY: this.state.persons[0].setState('name' = 'LeeBanana'
    this.setState({persons: [
      { name: 'LeeBANANAS', age: 36 },
      { name: 'Heather', age: 27 },
      { name: 'Jess', age: 32 },
    ]})
  }

  render() { 
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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

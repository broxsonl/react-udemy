import React, { PureComponent } from 'react';
import Person from '../Person/Person';

// PureComponent automatically implements a shouldComponentUpdate hook
// and checks each prop passed into the component and decides to rerender or not.
// Much cleaner if applicable use
class PersonList extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[PersonList.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[PersonList.js] shouldComponentUpdate');

  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //     ) {
  //     return true;
  //   }
    
  //   return false;
  // }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('[PersonList.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[PersonList.js] componentDidUpdate');
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('PersonList.js] componentWillUnmount');
  }

  render() {
    console.log('[PersonList.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
      
          changed={(event) => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)}
        />
      )
    });
  }
}

export default PersonList;
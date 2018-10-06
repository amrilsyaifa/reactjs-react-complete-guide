import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/persons/Persons'
import Cockpit from '../components/cockpit/Cockpit'
class App extends Component {
  state = {
    persons: [
      {id: '1a', name: 'amril', hobby: 'Ngopi' },
      {id: '1b', name: 'syaifa', hobby: 'ngoding' },
      {id: '1c', name: 'yasin', hobby: 'ngeteh' },
      {id: '1d', name: 'yoga', hobby: 'ngupil' },
      {id: '1e', name: 'dirga', hobby: 'Joget' }
    ],
    showPersons : false
  }

  removeNameHandler = (personIndex) => {
    // const persons = this.state.persons sama
    // const persons = this.state.persons.slice()  sama metode
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  toggleHandlerPerson = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons : !doesShow})
  }

  changeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
       <div>
         <Persons 
          persons={this.state.persons}
          clicked={this.removeNameHandler}
          changed={this.changeName}
         />
       </div>
      )     
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          AppTitle={this.props.title}
          persons={this.state.persons}
          clicked={this.toggleHandlerPerson}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App

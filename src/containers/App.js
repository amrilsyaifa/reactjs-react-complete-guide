import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/persons/Persons'
import Cockpit from '../components/cockpit/Cockpit'
import Aux from '../hoc/Auxs'
import withClass from '../hoc/withClass'

class App extends Component {
  constructor (props) {
    super(props)
    console.log('[App.js] inside Constructor', props)
    this.state = {
      persons: [
        {id: '1a', name: 'amril', hobby: 'Ngopi', age: 28},
        {id: '1b', name: 'syaifa', hobby: 'ngoding', age: 29 },
        {id: '1c', name: 'yasin', hobby: 'ngeteh', age: 13 },
        {id: '1d', name: 'yoga', hobby: 'ngupil', age: 17 },
        {id: '1e', name: 'dirga', hobby: 'Joget', age: 20 }
      ],
      showPersons : false,
      toggleClicked: 0
    }
  }

  componentWillMount () {
    console.log('[App.js] Inside CoponentWIllMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate()',nextProps,nextState)
    return true
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate()',nextProps, nextState )
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate()')
  }
  // state = {
  //   persons: [
  //     {id: '1a', name: 'amril', hobby: 'Ngopi' },
  //     {id: '1b', name: 'syaifa', hobby: 'ngoding' },
  //     {id: '1c', name: 'yasin', hobby: 'ngeteh' },
  //     {id: '1d', name: 'yoga', hobby: 'ngupil' },
  //     {id: '1e', name: 'dirga', hobby: 'Joget' }
  //   ],
  //   showPersons : false
  // }

  removeNameHandler = (personIndex) => {
    // const persons = this.state.persons sama
    // const persons = this.state.persons.slice()  sama metode
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  toggleHandlerPerson = () => {
    const doesShow = this.state.showPersons
    this.setState( (prevState, props) => {
      return {
        showPersons : !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    })
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
    console.log('[App.js] Inside Render()')
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
      <Aux>
        <Cockpit 
          AppTitle={this.props.title}
          persons={this.state.persons}
          clicked={this.toggleHandlerPerson}
          showPersons={this.state.showPersons}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App)

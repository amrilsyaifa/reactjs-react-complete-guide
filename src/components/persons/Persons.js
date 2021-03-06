import React, { Component } from 'react'
import Person from './person/Person'

class Persons extends Component {
constructor (props) {
    super(props)
    console.log('[Persons.js] inside Constructor', props)
    this.lastPersonRef = React.createRef()
    }

    componentWillMount () {
    console.log('[Persons.js] Inside CoponentWIllMount()')
    }

    componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()')
    this.lastPersonRef.current.focus()
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()',nextProps,nextState)
        return nextProps.persons !== this.props.persons
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside componentWillUpdate()',nextProps, nextState )
    }

    componentDidUpdate() {
        console.log('[UPDATE Person.js] Inside componentDidUpdate()')
    }

    render() {
        console.log('[Persons.js] Inside Render()')
        return this.props.persons.map((person, index) => {
            return <Person 
                name={person.name} 
                position={index}
                hobby={person.hobby}
                age={person.age}
                click={() => this.props.clicked(index)}
                change={(event) => this.props.changed(event, person.id)}
                key={person.id}
                ref={this.lastPersonRef}
                />
            } )
    }
} 

    export default Persons
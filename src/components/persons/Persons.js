import React, { Component } from 'react'
import Person from './person/Person'

class Persons extends Component {
constructor (props) {
    super(props)
    console.log('[Persons.js] inside Constructor', props)
    }

    componentWillMount () {
    console.log('[Persons.js] Inside CoponentWIllMount()')
    }

    componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()')
    }
    render() {
        console.log('[Persons.js] Inside Render()')
        return this.props.persons.map((person, index) => {
            return <Person 
                name={person.name} 
                hobby={person.hobby}
                click={() => this.props.clicked(index)}
                change={(event) => this.props.changed(event, person.id)}
                key={person.id}
                />
            } )
    }
} 

    export default Persons
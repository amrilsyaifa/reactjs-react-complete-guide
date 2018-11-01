import React, { Component } from 'react'
import classes from './Person.css'
import WithClass from '../../../hoc/WithClass'

class Person extends Component {
    constructor (props) {
        super(props)
        console.log('[Person.js] inside Constructor', props)
        }
    
        componentWillMount () {
        console.log('[Person.js] Inside CoponentWIllMount()')
        }
    
        componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()')
        }
    render () {
        console.log('[Person.js] Inside Render()')
        return (
            <WithClass classes={classes.Person} >
                <p onClick={this.props.click}> Saya {this.props.name}, umur {Math.floor(Math.random() * 10 )} hobby {this.props.hobby} {this.props.children} </p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </WithClass>
        )
    }
}

export default Person
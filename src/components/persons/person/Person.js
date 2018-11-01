import React, { Component } from 'react'
import classes from './Person.css'

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
            <div className={classes.Person} >
                <p onClick={this.props.click}> Saya {this.props.name}, umur {Math.floor(Math.random() * 10 )} hobby {this.props.hobby} {this.props.children} </p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        )
    }
}

export default Person
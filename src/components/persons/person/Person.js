import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'
import Aux from '../../../hoc/Auxs'
import withClass from '../../../hoc/withClass'

class Person extends Component {
    constructor (props) {
        super(props)
        console.log('[Person.js] inside Constructor', props)
        }
    
        componentWillMount () {
        console.log('[Person.js] Inside CoponentWIllMount()')
        }
    
        componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.focus()
        }
        }
    render () {
        console.log('[Person.js] Inside Render()')
        return (
            <Aux >
                {console.log('iniiiiiiii',this.props)}
                <p onClick={this.props.click}> Saya {this.props.name}, umur {this.props.age} hobby {this.props.hobby} {this.props.children} </p>
                <input 
                    ref={(inp) => {this.inputElement = inp}} //membuat focus jika ref inp = this.inputElement setelah componenetDidMount akan memanggil inp dengan nilai index 0
                    type="text" 
                    onChange={this.props.change} 
                    value={this.props.name} 
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    hobby: PropTypes.string,
    change: PropTypes.func
}

export default withClass(Person, classes.Person)
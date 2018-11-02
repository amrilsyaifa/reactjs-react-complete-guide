import React from 'react'
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxs'

const Cockpit = (props) => {
    const assignClasses = []

    let btnClass = classes.Button
    if(props.showPersons) {
        btnClass = [classes.Button, classes.red].join(' ')
    }

    if (props.persons.length <= 3 ) {
      assignClasses.push(classes.red )
    }
    if (props.persons.length <= 1) {
      assignClasses.push( classes.bold )
    }

    return (
        <Aux>
            <h1>{props.AppTitle}</h1>
            <p className={assignClasses.join(' ')}>This is realy working</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
            >Press Me</button>
        </Aux>
    )
}

export default Cockpit
import React from 'react'
import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assignClasses = []

    let hover = ''
    if(props.showPersons) {
        hover = classes.red
    }

    if (props.persons.length <= 3 ) {
      assignClasses.push(classes.red )
    }
    if (props.persons.length <= 1) {
      assignClasses.push( classes.bold )
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.AppTitle}</h1>
            <p className={assignClasses.join(' ')}>This is realy working</p>
            <button 
                className={hover}
                onClick={props.clicked}
            >Press Me</button>
        </div>
    )
}

export default Cockpit
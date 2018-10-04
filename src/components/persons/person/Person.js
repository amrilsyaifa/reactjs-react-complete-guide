import React from 'react'
import classes from './Person.css'

const Person = (props) => {
    
    return (
        <div className={classes.Person} >
            <p onClick={props.click}> Saya {props.name}, umur {Math.floor(Math.random() * 10 )} hobby {props.hobby} {props.children} </p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default Person
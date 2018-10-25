import React from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {
  let btnClass = ''

  if (props.showFriends) {
    btnClass = classes.Red
  }
  const assignedClasses = []
  if (props.friends.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.friends.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>Some example text to fuck with</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Friends</button>
    </div>
  )
}

export default Cockpit

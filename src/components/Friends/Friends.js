import React from 'react'
import Person from './Person/Person'

const friends = (props) => props.friends.map((friend, index) => {
  return <Person
    name={friend.name}
    age={friend.age}
    delete={() => props.delete(index)}
    key={friend.id}
    change={(event) => props.change(event, friend.id)}
  />
})

export default friends

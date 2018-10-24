import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    friends: [
      { id: 'burp', name: 'IVB', age: 27 },
      { id: 'sneeze', name: 'Fox', age: 27 },
      { id: 'fart', name: 'Morty', age: 16 },
    ],
    showFriends: false,
  }

  handleDeleteFriend = (friendIndex) => {
    // Using 'slice' copies the friends array instead of making a reference or pointer, thus preventing direct changes to the original array:
    // const friends = this.state.friends.slice()
    // Or, make a copy with the spread operator (...)
    const friends = [...this.state.friends]
    friends.splice(friendIndex, 1)
    this.setState({friends: friends})
  }

  handleChangeName = (event, id) => {
    const friendIndex = this.state.friends.findIndex(friend => {
      return friend.id === id
    })
    // Old style:
    // const friend = Object.assign({}, this.state.friends[friendIndex])

    // ES6 style: (exact same result)
    const friend = {
      ...this.state.friends[friendIndex]
    }

    friend.name = event.target.value

    const friends = [...this.state.friends]
    friends[friendIndex] = friend

    this.setState( {
      friends: friends
    } )
  }

  handleToggleFriend = () => {
    const doesShow = this.state.showFriends
    this.setState({ showFriends: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let friends = null;

    if (this.state.showFriends) {
      friends = (
        <div>
          { this.state.friends.map((friend, index) => {
            return <Person
              name={friend.name}
              age={friend.age}
              key={friend.id}
              delete={() => this.handleDeleteFriend(index)}
              change={(event) => this.handleChangeName(event, friend.id)}
            />
          })}
        </div>
      )
      style.backgroundColor = 'red'
    }

    const classes = []
    if (this.state.friends.length <=2) {
      classes.push('red')
    }
    if (this.state.friends.length <=1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>Some example text to fuck with</p>
        <button
          style={style}
          onClick={ this.handleToggleFriend }>Toggle Friends</button>
        {friends}
      </div>
    );
  }
}

export default App;

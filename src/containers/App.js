import React, { Component } from 'react'
import classes from './App.css'
import Friends from '../components/Friends/Friends'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    friends: [
      { id: 'burp', name: 'IVB', age: 28 },
      { id: 'sneeze', name: 'Fox', age: 27 },
      { id: 'fart', name: 'Morty', age: 16 },
    ],
    showFriends: false,
  }

  handleDeleteFriend = (friendIndex) => {
    const friends = [...this.state.friends]
    friends.splice(friendIndex, 1)
    this.setState({friends: friends})
  }

  handleChangeName = (event, id) => {
    const friendIndex = this.state.friends.findIndex(friend => {
      return friend.id === id
    })
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
    let friends = null;

    if (this.state.showFriends) {
      friends = (
        <Friends
          friends={this.state.friends}
          delete={this.handleDeleteFriend}
          change={this.handleChangeName} />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showFriends={this.state.showFriends}
          friends={this.state.friends}
          clicked={this.handleToggleFriend}/>
        {friends}
      </div>
    );
  }
}

export default App;

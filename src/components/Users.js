import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* <p>{this.props.users}</p> */}
          {this.props.users.map(user => <li
            key={user.username + user.hometown}>{user.username} from {user.hometown}</li>)}
          {/* In addition, display the total number of users curently in the store */}
         <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)

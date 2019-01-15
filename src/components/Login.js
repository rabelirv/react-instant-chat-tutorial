import '../styles/App.css'
import '../styles/Login.css'

import React from 'react';
import ChatApp from './ChatApp';

// This is the first screen seen by the user. We should display some way for
// them to enter their name and enter the chat room
class Login extends React.Component {
  state = {
    username: '',
    submitted:false
  }

  usernameChangeHandler= (e)=> {
    this.setState({ username: e.target.value });
  }
  usernameSubmitHandler = (e)=> {
    e.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }
  render() {
    console.log(this.state);
    if (this.state.submitted) {
      // Form was submitted, now show the main Login
      return (
        <ChatApp username={this.state.username} />
      );
    }
    return(
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
      <h1>FRIENDLY</h1>
      <div>
      <input
      type="text"
      onChange={this.usernameChangeHandler}
      placeholder="Enter a username..."
      required />
      </div>
      <input type="submit" value="Submit" />
      </form>

    )
  }

}
Login.defaultProps = {
};

export default Login;

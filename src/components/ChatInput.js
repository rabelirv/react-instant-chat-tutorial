import React from 'react';

// This component is where the user can type their message and send it
// to the chat room. We shouldn't communicate with the server here though.
class ChatInput extends React.Component {
  state = {
    chatInput:''
  }

  textChangeHandler =(e)=> {
    this.setState({ chatInput: e.target.value })
  }
  submitHandler =(e)=> {
    e.preventDefault()
    this.props.onSend(this.state.chatInput)
    this.setState({ chatInput: '' });
  }
  render() {
    // Display a user input form and do something when it is submitted
    return (
      <form className="chat-input" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;

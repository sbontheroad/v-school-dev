import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="username" value={this.props.username} onChange={(event) => {this.props.handleChange("username", event)}}/>
        <textarea placeholder="message" value={this.props.message} onChange={(event) => {this.props.handleChange("message", event)}}/>
        <button>send</button>
      </div>
    )
  }
}

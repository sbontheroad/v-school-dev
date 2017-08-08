import React from 'react';

export default class Chat extends React.Component {
  genChats() {
    return this.props.chat.map((item, index), => {
      return (
        <div key={item.message + index}>
          {item.username} said {item.message};
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.genChats()}
      </div>
    )
  }
}

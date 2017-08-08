import React from "react";
import autoBind from "react-autobind";

import Chat from "../components/chat.js";

export default class ChatContainer extends React.Component {
  render() {
    return (
      <div>
        <Chat chats={[]} />
      </div>
    )
  }
}

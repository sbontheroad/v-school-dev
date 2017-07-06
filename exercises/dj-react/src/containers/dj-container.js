import React from "react";
import autoBind from "react-autobind";
import ReactAudioPlayer from "react-audio-player";

import DjApp from "../components/dj-app.js";

class DjContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      style: {
        backgroundColor: "hotpink",
        borderRadius: 0,
        width: 150,
        height: 150,
        margin: "10px"
      }
    };
    this.player=null;
    autoBind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toOval);
    this.player = document.querySelector("#player");
    }

  audio() {
    let audioPlayer = document.querySelector("#player");
    let playing = false;
    audioPlayer.onplaying = () => {
      playing=true;
    };
    audioPlayer.onpause = () => {
      playing = false;
    }
    if(playing) {
      audioPlayer.pause();
    } else {
      audioPlayer.
    }
  }

  toCircle() {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: "purple",
        borderRadius: "50%",
        width: 150,
        height: 150
      }
    });
  }

  toOval() {
    this.setState({
      style: {
        ...this.state.style,
        borderRadius: "50%",
        backgroundColor: "orange",
        width: 150,
        height: 300
      }
    })
  }

  click() {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: "red"
      }
    });
  }

 onMouseOver() {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: "lawngreen"
      }
    });
  }
  render() {
    let boxes = [];
    for(let i = 0; i < 5; i++) {
      boxes.push(<DjApp handleClick={this.click} handleCircle={this.toCircle} handleHover={this.toOval} handleMouseOver={this.onMouseOver} style={this.state.style} />)
    }
    return (
      <div>
        <ReactAudioPlayer src="/music/Nena.mp3"  />
        {boxes}
      </div>
    )
  }
}
export default DjContainer;

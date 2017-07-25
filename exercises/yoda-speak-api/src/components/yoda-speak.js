import React from "react";

class YodaSpeak extends React.Component {
  render() {
    return (
      <div className="yoda-speak-container">
        <h1>Yoda Speak</h1>
        <input className="input" placeholder="enter text to translate to yoda speak" type="text" value={this.props.input} onChange={(event) => {this.props.handleChange(event)}}/>
        <button className="button" onClick={() => {this.props.handleClick(this.props.input)}}>Translate</button>
        <h3 className="output">{this.props.yodaspeak}</h3>
        <div className="img"></div>
      </div>
    )
  }
}

export default YodaSpeak;

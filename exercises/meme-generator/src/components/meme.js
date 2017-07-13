import React from "react";

class Meme extends React.Component {
  render() {
    return (
      <div className="meme-custom">
        <div className="meme">
          <div className="memeImage" style={{backgroundImage:`url('${this.props.url}')`}}>
          <div className="memeUpper">
            <h3 className="meme-text-top meme-text">{this.props.topText}</h3>
          </div>
          <div className="memeLower">
            <h3 className="meme-text-bottom meme-text">{this.props.bottomText}</h3>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Meme;

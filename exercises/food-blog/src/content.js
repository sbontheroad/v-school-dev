import React from "react";

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className="article">
          <h2>{this.props.name}</h2>
          <h3>{this.props.desc}</h3>
          <h4>Posted by Someone on {this.props.date}</h4>
          <button onClick={() => {this.props.handleDescription(this.props.desc)}}>Description</button>
          <button onClick={() => {this.props.youLike(this.props.title)}}>play</button>
        </div>

      </div>
    )
  }
}

      {/* <div className="container content">
       <div className="row">
           <div className="col=md-7 col-md-offset-2">
            <div className="content-hover">
               <h2>Man must explore, and this is exploration at its greatest</h2>
              <h3>Problems look mighty small from 150 miles up</h3>
            </div>
            <h4>Posted by Someone on June 29th, 2017</h4>
           </div>
        </div>
      </div>
     )
  }
 }  */}

export default Content;

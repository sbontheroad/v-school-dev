import React from "react";

class Site extends React.Component {
  render() {
    return (
      <div className="col-md-3 col-sm-4">
        <div onClick={() => {
          this.props.handleClick(this.props.quote)
        }} className="site-circle" style={{
          backgroundImage: `url('${this.props.image}')`
        }}>

        </div>

        <h3>{this.props.person}</h3>
      </div>
    )
  }
}

export default Site;

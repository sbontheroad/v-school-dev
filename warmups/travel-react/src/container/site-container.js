import React from "react";

import Site from "../components/site.js";

class SiteContainer extends React.Component {
  alertDesc(desc) {
    alert(`Description: ${desc}`);
  }
  render() {
    let sites = this.props.sites.map((item) => {
      return <Site key={item.name} handleClick={this.alertDesc} image={item.image} name={item.name} desc={item.desc}/>
    });
    return (
      <div>
      <div className="contain-fluid">
      <header className="header">
        <h1>Places I want to go...</h1>
      </header>
    </div>

    <div className="container-fluid">
      <div className="row drop">
      {sites}
    </div>
  </div>
  </div>
    )
  }
}

export default SiteContainer;

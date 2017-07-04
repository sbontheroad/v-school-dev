import React from "react";

import Site from "../components/site.js";

class SiteContainer extends React.Component {
  alertQuote(quote) {
    alert(`Quote: ${quote}`)
  }
  render() {
    let images = this.props.images.map((item) => {
      return <Site key={item.name} handleClick={this.alertQuote} image={item.image} person={item.person} quote={item.quote} />
    });
    return (
      <div>
        <div className="contain-fluid container-custom">
          <h1>Quotes...</h1>
          <div className="row">
            {images}
          </div>
        </div>


        {/* <div>
          <NavCatch brand={navBrand} links={navLinks}/>
          <SiteContainer images={images}/>
        </div> */}
      </div>
    )
  }
}

export default SiteContainer;

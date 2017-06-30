import React from "react";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <span className="fa-stack fa-md social-icons">
            <FontAwesome stack="2x" name="circle"/>
            <FontAwesome stack="1x" name="twitter" inverse />
          </span>
          <span className="fa-stack fa-md social-icons">
            <FontAwesome stack="2x" name="circle" />
            <FontAwesome stack="1x" name="facebook" inverse />
          </span>
          <span className="fa-stack fa-lg social-icons">
            <FontAwesome stack="2x" name="circle" />
            <FontAwesome stack="1x" name="github" inverse />
          </span>
        </div>
        <p>Copyright &#169; Your Website 2017</p>
      </footer>

    )
  }
}

export default Footer;

// className="social-icons" name="twitter-square"/>
// <FontAwesome className="social-icons" name="facebook-square"/>
// <FontAwesome className="social-icons" name="github-square"/>

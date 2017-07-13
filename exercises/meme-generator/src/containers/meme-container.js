import React from "react";

//get the thing that connects react to redux
import {connect} from "react-redux";

//get bindActionCreators to bind the 'this' to the store
import { bindActionCreators } from "redux";

//import all actions
import * as actionCreators from "../actions/";


//import components
import Meme from "../components/meme.js";

class MemeContainer extends React.Component {
  render() {
    return (
      <div>
        <Meme topText={this.props.topText} bottomText={this.props.bottomText} url={this.props.url} />
      </div>
    )
  }
}

//map our data from store to props
const mapStateToProps = (state) => {
  return state;
}

//tell redux how to turn actions inot functions that can be called in react via props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);

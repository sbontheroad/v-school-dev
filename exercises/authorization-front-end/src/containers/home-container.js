import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../actions";

import Events from "../components/events.js";
import Guests from "../components/guests.js";
import Modal from "react-modal";

import LoginContainer from "../containers/login-container.js";
import SignupContainer from "../containers/signup-container.js";

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    // position                   : 'absolute',
    top                        : '30%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    transform                  : "translate(-50%, -50%)"
  }
};

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowingLogin: false,
      isShowingSignup: false
    }
    autoBind(this);
  }
  componentWillMount() {
    this.props.loadEvents();
  }
  componentDidUpdate() {
    if(this.props.guests.length === 0 && this.props.token) {
      this.props.loadGuests(this.props.token);
    }
  }
  toggleModal(key) {
    this.setState({
      [key]: !this.state[key]
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.toggleModal("isShowingSignup")}}>Signup</button>
        <Modal style={customStyles} isOpen={this.state.isShowingSignup} onRequestClose={() => {this.toggleModal("isShowingSignup");}} contentLabel="Signup">
          <SignupContainer toggleModal={this.toggleModal}/>
        </Modal>

        <button onClick={() => {this.toggleModal("isShowingLogin")}}>Login</button>
        <Modal style={customStyles} isOpen={this.state.isShowingLogin} onRequestClose={() => {this.toggleModal("isShowingLogin");}} contentLabel="Login">
            <LoginContainer toggleModal={this.toggleModal}/>
        </Modal>


        <Events events={this.props.events} />
        <Guests token={this.props.token} guests={this.props.guests} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators) (HomeContainer);

import React from "react";

class CurrencyConverter extends React.Component {
  render() {
    return (
      <div className="currency-converter-wrapper">
        <h1 className="title">CONVERT USD TO ANOTHER CURRENCY</h1>
        <input className="input" placeholder="input 3 letter currency code" type="text" name="currency" onChange={(event) => {this.props.handleChange(event)}} value={this.props.currency} />
        <input className="input" placeholder="input amount to convert" type="number" name="amount" onChange={(event) => {this.props.handleChange(event)}} value={this.props.amount} />
        <button className="button" onClick={() => {this.props.handleClick(this.props.currency, this.props.amount)}}>convert</button>
        <h3 className="output">${this.props.newAmount}</h3>
      </div>
    )
  }
}

export default CurrencyConverter;

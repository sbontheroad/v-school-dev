import axios from "axios";

export function getInfo(currency, amount) {
  return (dispatch) => {
    return axios.get(`http://api.fixer.io/latest?base=USD`).then((response) => {
      console.log(response.data.rates);
      dispatch(convert(response.data.rates, currency, amount));
    })
    .catch((err) => {
      throw err;
    });
  }
}

function convert(data, currency, amount) {
  console.log(data);
  currency = currency.toUpperCase();
  //take array and put key in brackets and it will return value of key
  let newAmount = (data[currency] * amount).toFixed(2);
  //find match of currency in response.data.rates
  //take value and multiply it by the input amount
  //return output
console.log(newAmount);
  return {
    type: "CONVERT_CURRENCY",
    newAmount
  }

}

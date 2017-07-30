// let axios = require('axios');
import axios from 'axios';


export function setData(data) => {
  return {
    type: "SET_DATA",
    data
  }
}

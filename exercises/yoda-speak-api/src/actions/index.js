import axios from "axios";

let config = {
  headers: {
    "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
  }
}

export function convertText(yodaspeak) {
  return (dispatch) => {
    return axios.get(`https://yoda.p.mashape.com/yoda?sentence=${yodaspeak}`, config).then((response) => {
      dispatch(yodaSpeak(response.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function yodaSpeak (yodaspeak) {
  return {
    type: "YODA_SPEAK",
    yodaspeak
  }
}

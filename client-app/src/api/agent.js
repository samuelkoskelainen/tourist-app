import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_EVENTS_URL;

const responseBody = (response) => response.data;

const requests = {
  get: (url) =>
    axios
      .get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json',
        },
      })
      .then(responseBody),
};

const Events = {
  list: () => requests.get('/api/v1/event'),
};

const agent = {
  Events,
};

export default agent;

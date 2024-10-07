import axios from 'axios';

const API_BACKEND = 'https://amo-widgets.herokuapp.com/';

export const instance = axios.create({
  baseURL: API_BACKEND,
});
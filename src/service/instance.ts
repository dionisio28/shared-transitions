import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 10000,
  headers: {Authorization: `Client-ID ${Config.CLIENT_ID}`},
});

export default instance;

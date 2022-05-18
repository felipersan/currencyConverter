import axios from 'axios';
import {exp} from 'react-native/Libraries/Animated/Easing';

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/',
});

export default api;

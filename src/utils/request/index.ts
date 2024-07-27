import axios from "axios";
const instance = axios.create({
  baseURL: 'https://my-express-app-teal.vercel.app'
});

export default instance;
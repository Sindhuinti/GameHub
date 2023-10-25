import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fb4fedeb37df41df9ef06015cca0b612",
  },
});

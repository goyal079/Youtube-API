import axios from "axios";
const KEY = "AIzaSyDvZM3LHXKJkgoSM8n2mzD8udmNCZNq1BY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY,
  },
});

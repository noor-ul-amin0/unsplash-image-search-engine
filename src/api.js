import axios from "axios";

// api used to fetch images ...

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID g_zgx2aglv_BldAegdlpnO1pB7Jko-eZmZQcZcq6Djc",
  },
});

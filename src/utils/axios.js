import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  https: config,
});

export default instance;

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });

// export default instance;

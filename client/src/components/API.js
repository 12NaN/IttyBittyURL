import axios from "axios";
export const createShortUrl = obj => {
  const requestUrl = "/api/url/shorten";
//  return axios.post(requestUrl, {longUrl: "https://github.com/muhzi4u/URL-Shortner/blob/master/client/src/components/landing/Landing.js"});
  return axios.post(requestUrl, obj);
};
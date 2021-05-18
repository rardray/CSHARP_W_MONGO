import axios from "axios";

export function getRequest(url, action, id) {
  axios
    .get(id ? `${url}/${id}` : url)
    .then((res) => action(res))
    .catch((err) => err);
}

export function postRequest(url, data, action, redirect) {
  axios
    .post(url, data)
    .then((res) => action(res))
    .catch((err) => console.log(err));
}

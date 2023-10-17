import wrapPromise from "./wrapPromise";
import axios from 'axios';

function fetchData(url) {
  const promise = fetch(url)
    .then((res) => {
      console.log('fetch1',res);
      return res.json();
    })
    .then((res) => {
      console.log('fetch2',res);
      return res;
    });

  return wrapPromise(promise);
}

export default fetchData;
import { xhrData, insertLast} from "./lib/index.js";
// import { } from "./lib/index.js";

xhrData.get(
  'https://jsonplaceholder.typicode.com/uses',
  (result) => {
    console.log(result);
    insertLast('body', JSON.stringify(result));
  }, 
  (err) => {
    insertLast('body', err);
  }
);
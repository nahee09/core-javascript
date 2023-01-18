import { xhrData, insertLast, xhrPromise} from "./lib/index.js";
// import { } from "./lib/index.js";

// xhrData.get(
//   'https://jsonplaceholder.typicode.com/uses',
//   (result) => {
//     console.log(result);
//     insertLast('body', JSON.stringify(result));
//   }, 
//   (err) => {
//     insertLast('body', err);
//   }
// );

//get메서드 사용해보기
// xhrPromise
// .get('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })
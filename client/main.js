import { 
  xhrData, 
  insertLast, 
  xhrPromise, 
  nahee, 
  delayP
}from "./lib/index.js";
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

//nahee.js의 get 메서드 써보기 
async function render(){

  await delayP(2000);
  let response = await nahee.get('https://jsonplaceholder.typicode.com/users')



  console.log(response.data);
}


render()
import { 
  // createUserCard,
  nahee, 
  getNode, 
  renderUserCard
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
// async function render(){

//   await delayP(2000);
//   let response = await nahee.get('https://jsonplaceholder.typicode.com/users')



//   console.log(response.data);
// }

// render()



//rendingUserList
//ajax get user List 
//유저 카드 생성
//생성된 카드로 랜더링

const userCardContainer = getNode('.user-card-inner');

async function rendingUserList(){
  // let response = await nahee.get('https://jsonplaceholder.typicode.com/users/1');
  let response = await nahee.get('https://jsonplaceholder.typicode.com/users');
  let userData = response.data;

  userData.forEach((data) =>{
    renderUserCard(userCardContainer, data);
  })
  
  // console.log(createUserCard(userData));
  // renderUserCard(userCardContainer, userData);
  
}

rendingUserList();


/* global gsap */

import { 
  // createUserCard,
  nahee, 
  getNode, 
  renderUserCard,
  changeColor,
  delayP, 
  renderSpinner
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
  //로딩 보여주기
  renderSpinner(userCardContainer);
  try{
    //서버에서 받아오느라 딜레이 걸렸다고 설정(가정)
    await delayP(2000); 

    //로딩 그만 보여주기
    getNode('.loadingSpinner').remove();

    // let response = await nahee.get('https://jsonplaceholder.typicode.com/users/1');
    let response = await nahee.get('https://jsonplaceholder.typicode.com/users');
    let userData = response.data;

    userData.forEach((data) =>{
      renderUserCard(userCardContainer, data);
    })
    
    // console.log(createUserCard(userData));
    // renderUserCard(userCardContainer, userData);
    
    // let list = document.querySeletorAll('.user-card');
    // let realist = Array.from(list);
    // 위 두 줄을 gsap으로 한 줄로
    // console.log(gsap.utils.toArray('.user-card'));
    
    changeColor('.user-card')

    // 첫 번째 인자에 객체는 못 옴. 
    gsap.to(gsap.utils.toArray('.user-card'), 
    {x:0, 
    duration:1, 
    stagger:0.2, 
    opacity:1
  });
  }catch(err){
    console.log(err);
  }
}

rendingUserList();


import { insertLast } from "../dom/insert.js";
// 유저 카드 생성 함수
const createUserCard = ({
  id = '', 
  name = '', 
  email = '', 
  website = ''
} = {}) => {
  // const {id, name, email, website = '사이트'} = user;
  return /*html*/`
  <article class="user-card" data-index="user-${id}">
    <h3 class="user-name">${name}</h3>
    <div class="user-resouce-info">
      <div>
        <a class="user-email" href="mailto:${email}">${email}</a>
      </div>
      <div>
        <a class="user-website" href="http://${website}" 
        target="_blank" rel="noopener noreferer">${website}</a>
      </div>
    </div>
    <button class="delete">삭제</button>
  </article>
  `
}

// 유저 카드 랜더링 함수
export function renderUserCard(target, data){
  insertLast(target, createUserCard(data));
}


// console.log(createUserCard(1, 'tiger', 'tiger@euid.dev', 'tiger.com'));
// console.log( createUserCard({
//   id:1,
//   name:'tiger', 
//   email: 'tigerr@euid.dev'
// }) );


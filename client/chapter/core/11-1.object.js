/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  'z-index': 10000, 
  top: '50%',
  left: '50%',
  width: '60vw',
  'max-width': '800px',
  height: '40vh',
  'min-height': '280px',
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-asdf',
  name: 'kimnahee', 
  email: 'abc@gmail.com',
  isSignIn: true, 
  permission: 'paid'
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['email']);
// console.log(authUser['isSignIn']);
// console.log(authUser['permission']);


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = calculateProperty){

  return {
    name: 'unknown', 
    email: 'unknown\'s email',
    [computedProp]: '010-0000-0000'
  };
}

const user = createUser('tel');

// 프로퍼티 포함 여부 확인
for(let key in authUser){
  if(({}).hasOwnProperty.call(authUser, key))
    console.log(key);
}

// 프로퍼티 나열
let keyArray = Object.keys(authUser);
let keyValues = Object.values(authUser);

let result = getPropertiesList(authUser)

function getPropertiesList(obj){
  // return Object.keys(list);
  let result = [];
  for(let key in obj){
    if(({}).hasOwnProperty.call(obj, key))
    result.push(key);
  }
  return result;
}

// 프로퍼티 제거 or 삭제 
//제거는 값을 비움, 삭제는 아예 없애는 것
function removeProperty(obj, prop){ //제거
  // obj.prop = null; //.은 안되는 구나.
  obj[prop] = null;
}

function deleteProperty(obj, prop){ //삭제
  // delete obj.prop;
  delete obj[prop];
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// const student = {
//   name: name, //위에 선언된 '선범'이 들어간 name을 value값으로 하겠다. 
//   email: email, 
//   authorization: authorization,
//   isLogin: isLogin
// }

// 위 주석처리 된 객체 초기화를 shorthand property로. 
const student = { name, email, authorization, isLogin };


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0이면? false : true
function isEmptyObject(obj) {
  // if(Object.keys(obj).length === 0){
  //   return true;
  // }else{
  //   return false;
  // }
  return Object.keys(obj).length === 0// true:false
}


let salaries = {
  John: 100, 
  Ann: 160, 
  Pete: 430
}

//월급의 총합을 구하는 함수(Object.entries 사용해서)
function sumSalaries(obj){
  let result = 0;

  for(let keyValue of Object.entries(salaries)){
    let key = keyValue[0];
    let value = keyValue[1];

    result += value; 
  }
  
  //위 반복문과 똑같은 게 아래 코드
  // 구조 분해 할당 destructuring assignment
  for(let [key, value] of Object.entries(salaries)){
    result += value; 
  }
  
  return result;
}



let color = ['#ff0000', '#2b00ff', '#00ff2f'];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

const [red, green, blue] = color; 
// const [, , green] = color; 
console.log(red);

//객체 구조 분해 할당 
//위에 있던 샐러리 코드 상기
// let salaries = {
//   John: 100, 
//   Ann: 160, 
//   Pete: 430
// }

const {John, Ann, Pete} = salaries;

console.log(John); //100 나옴

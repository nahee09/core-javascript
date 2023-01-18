import {getNode  } from "../dom/index.js";
import { isNumber, isObject } from './typeOf.js';

const first = getNode('.first'); 

//이렇게 하면 모든 게 동시에 실행됨. 
// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

//하지만 올라간 다음에 회전시키고 다시 돌아오고 싶음.그래서 콜백이 필요함. 
function delay(callback, timeout = 500){
  setTimeout(callback, timeout);
}

delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)';
    delay(()=>{
      first.style.top = '0px';
    })
  })
})

/* -------------------------------------------------------------------------- */
/*                                   Promise                                  */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  shouldReject: false, 
  timeout: 1000, 
  data: '성공', 
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}){
  let config = {...defaultOptions}; //참조가 아닌 복사(얕은)

  if(isNumber(options)){ //인수가 숫자로만 받아왔다면 timeout에 설정해주기
    config.timeout = options;
  }
  
  if(isObject(options)){
    //객체 합성 mixin
    config = {...config, ...options}; //첫 번째 인자에 두 번째 인자의 값들 추가하기
  }

  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}

// delayP()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// })

//인자 하나만 적었는데도 실행 됨.
// delayP({
//   data: '성공입니다~~~~'
// }).then((res)=>{
//   console.log(res); //'성공입니다~~~~'
// })

// //3초 후에 실행됨(인수를 3000이라고 숫자만 써줬는데도 실행 됨~)
// delayP(3000).then((res)=>{
//   console.log(res); //진짜 성공
// })

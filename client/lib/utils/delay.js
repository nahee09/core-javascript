import {getNode  } from "../dom/index.js";

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

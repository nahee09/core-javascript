// 1. 인풋 밸류값 가져오기 
// 2. 이벤트 핸들러 연결하기 
// 3. 이벤트 기본동작 차단하기 
// 4. 두 수 더해주기 
// 5. 화면에 출력하기
/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */

const firstNumber = getNode('#firstNumber');
const secondNumber = getNode('#secondNumber');
const calculator = getNode('.calculator');
const result = getNode('.result');


function handler(e){
  let target = e.target;
  if(target.value === 'done'){
    e.preventDefault();
    const sumResult = +firstNumber.value + +secondNumber.value;
    result.innerText = sumResult;
  }

}

calculator.addEventListener('click', handler);
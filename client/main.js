/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */

// 1. 인풋 밸류값 가져오기 
// 2. 이벤트 핸들러 연결하기 
// 3. 이벤트 기본동작 차단하기 
// 4. 두 수 더해주기 
// 5. 화면에 출력하기

/* 내가 한 코드 */
// const firstNumber = getNode('#firstNumber');
// const secondNumber = getNode('#secondNumber');
// const calculator = getNode('.calculator');
// const result = getNode('.result');

// function handler(e){
//   let target = e.target;
//   if(target.value === 'done'){
//     e.preventDefault();
//     let sumResult = +firstNumber.value + +secondNumber.value;
//     result.innerText = sumResult; //innerText는 보안에 좋지 않다네.ㄱ- textcontent를 쓴다네. 
//   }
// }

// calculator.addEventListener('click', handler);


/* 범썜 코드 */ 
const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const result = getNode('.result');
const done = getNode('#done');

function getInputValue(node){
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.');
  return node.value;
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents(node){
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

function handler(e){
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);
  clearContents('.result');
  insertLast('.result', total);
}

function inputHandler(e){
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);
  
  clearContents(result);
  insertLast(result, total);
}

done.addEventListener('click', handler);

//처음 쓰는 change : 아래는 input에 변화가 일어날 때마다 핸들러 함수를 계속 실행해주는 것
firstInput.addEventListener('change', inputHandler);
secondInput.addEventListener('change', inputHandler);
//이렇게 하면 firstValue와 secondValue 인풋창에 화살표를 누를 때마다 결과값이 바뀜. 
/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);



let result = calcPrice(100, 3000, 5300)
console.log(result);

/* defalut parameter */
function calcPrice(  
  n1, //가독성을 위해 매개변수를 개행시켜 준 것. 익숙해지길.
  n2, 
  n3 = 0, //기본값 설정
  n4 = 0
){
  //에러 처리 (사실 이것도 따로 함수로 빼는 게 좋음!!!)
  if(!n1 || !n2){
    throw new Error('calcPrice 함수의 첫 번째, 두 번째 인수는 필수 입력값입니다.');
  }
  return n1 + n2 + n3 + n4;
}


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function Rem(pxValue, base = 16){
  return parseInt(pxValue, 10)/base + 'rem'; 
}

//test (TDD: Test Driven Development)
//assert는 성공하면 아무것도 안 뜸.
console.assert(Rem(20) === '1.25rem');
console.assert(Rem('30px') === '1.875rem');
console.assert(Rem('56px', 10) === '5.6rem');


// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
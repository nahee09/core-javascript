/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className); //first 
first.classList.add('hello'); //기존 클래스명 뒤에 추가
first.classList.remove('hello');

console.log(first.classList.contains('is-active')); //false


//또 함수를 함 만들어보자! 



addClass('.first', 'hello'); //<class = "first hello">hello</span>이 됨.

removeClass('.first', 'hello'); //<class = "first">hello</span>이 됨.

// removeClass('.first'); //인자를 하나만 받았을 땐 클래스명 몽땅 삭제하기 




/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.transform = 'rotate(360deg)'; //단위를 꼭!!입력해야 적용됨!! 

// console.log(first.style.fontSize); //이거 안 됨. 이렇게 가져올 수 없음.

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

let size = getComputedStyle(first).fontSize;
console.log(size); //32px


//또 함수 만들기! (lib/dom/css.js에 붙여넣음)


console.log(getCss('.first', 'font-size'));
//두 번째 인자가 정확한 css 속성인지 확인하기 


setCss('.first', 'color', 'red');


//줄여서 삼항 연산자로도 가능 
//const css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value);

css('.first', 'font-size', '100px'); //set
console.log(css('.first', 'font-size')); //get 
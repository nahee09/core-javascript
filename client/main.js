import { 
  diceAnimation, 
  enableElement,
  disableElement,  
  getNode, 
  getNodes
  } 
  from "./lib/index.js";

// [주사위 굴리기]
// 1. dice 애니메이션 불러오기 
// 2. bindeEvent 유틸 함수 만들기 
// 3. handlerRoliingDice 함수 만들고 토글로 애니메이션 제어하기 
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 

//유사배열(nodeList)로 받아와서 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

const handlerRollingDice = (() => {
  let stopAnimation;
  let isRolling = false; //toggle을 위한 변수

  return () => {
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation, 100);
      disableElement(recordButton);
      disableElement(resetButton);
    }else{
      clearInterval(stopAnimation);
      // clearTimeout()
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  }
})()

rollingDiceButton.addEventListener('click', handlerRollingDice);
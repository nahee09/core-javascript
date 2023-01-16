import { 
  diceAnimation, 
  enableElement,
  disableElement,  
  getNode, 
  getNodes, 
  visibleElement, 
  invisibleElement, 
  insertLast, 
  attr,
  clearContents, 
  memo
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

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기 

// [ 초기화 시키기 ]
// 1. clearContent 로 정보 지우기
// 2. total, count 초기화 
// 3. 스크롤 밑으로 보내기 
// 4. 메모이제이션 패턴 


//유사배열(nodeList)로 받아와서 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
memo('@tbody',() => getNode('.recordListWrapper tbody')); 

/* -------------------------------------------------------------------------- */
/*                                   render                                   */
/* -------------------------------------------------------------------------- */
let index = 0; 
let sumResult = 0; 

function renderRecordListItem(){
  // const cube = getNode('#cube');
  let diceValue = attr(memo('cube'), 'data-dice');
  sumResult += +diceValue;
  let template = /*html*/`
    <tr></tr>
      <td>${++index}</td>
      <td>${diceValue}</td>
      <td>${sumResult}</td>
    </tr>`;
  insertLast(memo('@tbody'), template);

  //값이 쌓일 때마다 밑 지점을 나타내기(스크롤 길이만큼 찍어준다.)
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}
/* -------------------------------------------------------------------------- */
/*                                    event                                   */
/* -------------------------------------------------------------------------- */

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

//기록 버튼 클릭시
function handleRecord(){
  visibleElement(recordListWrapper);

  renderRecordListItem();
}

//초기화 버튼 클릭시
function handleReset(){
  index = 0; 
  sumResult = 0; 
  invisibleElement(recordListWrapper);
  clearContents(memo('@tbody'));
}

rollingDiceButton.addEventListener('click', handlerRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
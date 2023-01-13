import { attr, clearContents, css, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from './lib/index.js'
import { jujeobData } from "./data/data.js";

const submit = getNode('#submit');
const result = getNode('.result');
const alertError = getNode('.alert-error');

function clickSubmitHandler(e){
  e.preventDefault();
  //nameField 입력 값 가져오기 
  let name = getInputValue('#nameField');
  //validation 
  //아무것도 입력하지 않았을 때
  if(!name){
    showAlert(alertError, '이름을 입력해주세요!', 2000);
    return;
  }
  //숫자를 입력했을 때(숫자+문자는 허용)
  if(isNumericString(name)){
    showAlert(alertError, '제대로 된 이름을 입력하세요!', 2000);
    return;
  }
  
  //jujeobData함수로 이름이 들어간 주접 배열 반환 
  let list = jujeobData(name);
  //주접 배열 중 하나를 랜덤으로 추출하기 위해 getRandom()함수 이용.
  let pick = list[getRandom(list.length-1)];
  //원래 있던 문구는 삭제(node.textContent = '';가 담긴 clearContents())
  clearContents(result);
  //랜덤 주접 결과부분 화면에 뿌려주기
  insertLast(result, pick);
  
}

submit.addEventListener('click', clickSubmitHandler);

import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

export function showAlert(node, text = '에러입니다.', timeout = 1500){
  if(typeof node === 'string') node = getNode(node);
  node.textContent = text; 
  
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout); //timeout만큼 시간이 지나고 removeClass()실행됨. 일정 시간 지나고 창 사라지게 하려고. 
}
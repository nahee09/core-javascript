/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// 이걸 많이 쓴다.
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

let span = document.querySelectorAll('span');
// let first = span[0];
// let second = span[1];

//구조 분해 할당
let [first, second] = document.querySelectorAll('span'); 

console.log(first);
console.log(second);


console.log(getNode('.first')); 



/* 문서 대상 확인 */
// - matches
//선택자 안에 class || id를 가지고 있는 대상이 있느냐.
console.log(getNode('.first').matches('.first')); //true


// - contains
//선택자의 자식들 중에 해당 element가 있느냐.
console.log(getNode('h1').contains(getNode('.first'))); //true


let clicked = false;
document.addEventListener("click", () => {
  if (first.classList.contains("first") && !clicked) {
    first.classList.add("is-active");
  } else {
    first.classList.remove("is-active");
  }
  clicked = !clicked;
});
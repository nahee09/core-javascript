/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode('.first');
const second = getNode('.second');

function handler(){
  console.log('hit !');
  // css('.second', 'display', 'none'); 
  //getNode(".second").style.display = "none"; //이것도 동일하게 작동함. 
}

// first.addEventListener('click', handler);


// const off = bindEvent('.first', 'click', handler);

// bindEvent('.second', 'click', off);



//축구공 게임 
const ground = getNode('.ground');
const ball = getNode('.ball');

ground.addEventListener('click', function(e){
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth/2}px, ${e.offsetY - ball.offsetHeight/2}px)`;
});

//아래는 내 마우스를 따라다녀. 근데 마우스 움직일때마다 계속 생성하니까 컴 다운되고 싶지 않으면.. 걍 주석처리 해두자. 
// ground.addEventListener('mousemove', function(e){
//   console.log(e.offsetX, e.offsetY);
// })

// - addEventListener
// - removeEventListener
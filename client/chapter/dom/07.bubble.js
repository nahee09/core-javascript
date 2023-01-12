/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */
const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', function(e){
  console.log("target: ", e.target); //내가 클릭하는 곳
  console.log('currentTarget: ', e.currentTarget); //이벤트가 걸린 대상 visual클래스 태그
  console.log(this === e.currentTarget); //true
  console.log('this: ', this);//visual 클래스 태그
  //오 아래처럼 쓰면 콘솔창에도 색을 넣을 수 있네.
  console.log('%c visual', 'background:dodgerblue');//visual 
  css('.pop', 'display', 'block'); 
})

getNode('.pop').addEventListener('click', (e)=>{
  e.stopPropagation();
  css('.pop', 'display', 'none'); 
})

// news.addEventListener('click', function(){
//   console.log('%c news', 'background:orangered'); 
// })

// desc.addEventListener('click', function(e){
//   e.stopPropagation();
//   console.log('%c desc', 'background:skyblue'); 
// })
/* 캡처링 ----------------------------------------------------------------- */
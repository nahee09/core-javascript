/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */
const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', function(e){
  console.log("target: ", e.target);
  console.log('currentTarget: ', e.currentTarget);
  console.log(this === e.currentTarget);
  console.log('%c visual', 'background:dodgerblue'); //오 이건 콘솔창에도 색 넣는 방법
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
/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

// let i = 0;

// while(i < 10){
//   console.log("안녕~~~~");
//   i++;
// }


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
// let i = 0; 
// while(i < frontEndDev.length){
//   console.log(frontEndDev[i]);
//   i++;
// }

// while 문 (역순환 : 역방향)
// let i = frontEndDev.length - 1; 
// while(i >= 0){
//   console.log(frontEndDev[i]);
//   i--;
// }

//심화ver. 변수 할당 없이 출력하기 
// let copyArray = [... frontEndDev]; //이건 같은 주소값을 가리키는 게 아니라 다른 공간에 복사가 되기 때문에 원래 배열을 파괴하지 않는다. 
let copyArray = frontEndDev.slice(); 

while(copyArray.length){
  console.log(copyArray.pop());//pop은 값을 반환 후 제거 
}


// 성능 진단 : 순환 vs. 역순환
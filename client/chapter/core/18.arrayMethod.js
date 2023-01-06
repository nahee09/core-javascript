/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

console.log(typeof arr); //object //배열도 객체로 보기에. 
console.log(Array.isArray(arr)); //true

//배열 체크 유틸 함수
function isArray(data){
  return Object.prototype.toString.call([]).slice(8, -1).toLocaleLowerCase() === 'array';
}
console.log(isArray(arr)); //true


/* 요소 순환 -------------------------------------------------------------- */

const user = {};
// forEach
arr.forEach((item, index) => {
  // console.log(item, index);
  this[index] = item;
}, user); //user는 아무것도 안 나와. 화살표 함수를 써서 this를 못 찾으니까. 

const user2 = {};
// forEach
arr.forEach(function(item, index){//일반 함수 선언으로 써주면 user2는 찍어봤을 때 나옴
  // console.log(item, index);
  this[index] = item;
}, user2); 




/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift

// reverse
// arr.reverse();
// console.log(arr);//[10000, 1000, 100, 10]

// splice
arr.splice(1, 0, 5, 6); //추가
console.log(arr); //[10, 5, 6, 100, 1000, 10000]
arr.splice(0, 2, 77);
console.log(arr);//[77, 6, 100, 1000, 10000]

// sort
//반환값이 <0이면 a가 b보다 앞에 있다, 
//==0이면 a와 b의 순서 그대로, 
//>0이면 b가 a보다 앞에 있어야 한다. 
arr.sort((a,b) => {
  return a - b 
})

console.log(arr);//[6, 77, 100, 1000, 10000]

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice

// map(forEach는 순환만 해주는 것. map은 안에서 일처리도 하고 새로운 배열로 만들어줌)
let arr2 = arr.map((item)=>{
  // console.log(item); // 6 77 100 1000 10000 아이템들 순환 
  return item * 2;
});

console.log(arr2); //[12, 154, 200, 2000, 20000]

let todo = ['점심 먹기', '청소기 돌리기', '...저녁 공부하기'];

let template = todo.map((todolist)=>{
  return /*html*/ `<li>${todolist}</li>`; //template literal
})

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
}); //이러면 이제 화면에 <li>로 todo를 뿌려줌.



/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
console.log(arr.indexOf(100)); //2(인덱스 위치)

// lastIndexOf
// includes
console.log(arr.includes(1)); //false

/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]
// find
const find = users.find((item) => {
  return item.id < 3; 
});
console.log(find); //find는 대상 하나만 찾아서 로운님이 나옴

// findIndex
const findIndex = users.findIndex((item)=>{
  return item.id === 3;
});

console.log(findIndex); //2

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number)=>{
  return number > 100;
}); 
//필터는 찾은 모든 애들을 배열로 넣어줌
console.log(result);//[1000, 10000]

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

// reduce
let reduce = friends.reduce((sum, cur)=>{
  return sum + cur.age;
}, 0); //0이라는 초기값을 안 주면 문자로 인식돼버림
console.log(reduce);

let template2 = todo.reduce((acc,cur,index)=>{
  return /* html */ acc + `<li>할일${index + 1} : ${cur}</li>`
},'')
console.log(template2)

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */
let str = '성찬 보경 일범 세민 형진 주현';
// split
let nameArray = str.split(' ');
console.log(nameArray);

// join
console.log(nameArray.join('/'));
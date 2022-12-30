/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

/* 사이 범위 확인하기 */ 
// let age = prompt("나이를 입력해주세요."); 
// if(age >= 14 && age <= 90)
//   alert("14세 이상 90세 이하시군요.");


/* 로그인 구현하기 */
let userInput = prompt("누구세요.");
let TheMaster = "TheMaster";

if(userInput.toLowerCase() == "Admin".toLowerCase()){
  let pw = prompt("비밀번호를 입력하세요.");
  if(pw.toLowerCase() == TheMaster.toLowerCase()){
    alert("환영합니다!");
  }else if(pw == '' || pw == null){
    alert("취소되었습니다.");
  }else{
    alert("인증에 실패하였습니다.");
  }
}else{
  alert("bye.");
}

/* 범쌤 코드 */
// let userName = prompt('사용자 아이디를 입력해주세요.','');

// // console.log(userName);
// if(userName?.toLowerCase() === 'admin'){

//   let pw = prompt('비밀번호를 입력해 주세요.','');

//   if(pw?.toLowerCase() === 'themaster'){
//     console.log('환영합니다.');
//   }else{
//     console.log('취소되었습니다.');
//   }
// }else if(userName.replace(/\s*/g,'') === '' || userName === null){
//   console.log('취소했습니다.');
// }else{
//   console.log('인증되지 않은 사용자 입니다.');
// }




let aa = 10;
let bb = '';
let v = Boolean(bb);
// 논리곱(그리고) 연산자
let AandB = aa && bb;

// 논리합(또는) 연산자
let AorB = aa || bb;

// 부정 연산자
let reverseValue = !v;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFlasy:false};
console.log(whichFalsy); //{thisIsFlasy:false}이 반환됨.

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || {thisIsTruthy:true};
console.log(whichTruthy); //2가 출력됨
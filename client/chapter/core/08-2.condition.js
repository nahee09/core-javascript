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
/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/* 입력받은 숫자의 부호 표시하기 */
let userInput = prompt("숫자 하나를 입력하세요.");

if(userInput > 0){
  alert(1);
}else if(userInput < 0){
  alert(-1);
}else{
  alert(0);
}

//위 내용을 삼항 연산자로.
// userInput > 0? alert(1) :
//   userInput < 0? alert(-1) : alert(0);


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt("그 영화 봤니?(yes or no)");

// 영화 볼거니?
let goingToWatchMovie;


// if 문(statement)
if(didWatchMovie == 'yes'){
  alert("영화를 봤구나!");
}else{
  alert("영화를 안 봤구나!");
  goingToWatchMovie = prompt("그 영화 볼거니?(yes or no)");

  if(goingToWatchMovie =='yes'){
    alert("영화 볼 거구나!");
  }
  else{
    alert("영화를 안 볼 거구나!");
  }
}
// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
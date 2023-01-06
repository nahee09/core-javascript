/* ---------------------------------------------------------------------- */
/* Try Catch                                                              */
/* ---------------------------------------------------------------------- */

//서버에서 문자 데이터가 왔다고 가정
let data = JSON.stringify({
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
})

try{
  let user = JSON.parse(data); //문자를 객체형으로 바꿔줌
  if(!user.value){
    throw new ReferenceError('해당 키 값은 존재하지 않습니다.');
  }
  // console.log(user.value);//undefined //근데 얘는 왜 is not defined라는 에러를 말 안 해주지.(정의되지 않은 변수에 접근하려고 하면 에러가 뜨는데.)
}catch(err){
  console.log(err.name); //ReferenceError
  console.log('JSON Error: '+ err.message); //JSON Error: 해당 키 값은 존재하지 않습니다.
  console.log(err.stack); //ReferenceError: 해당 키 값은 존재하지 않습니다.
}finally{
  console.log('일단 완료');
}



// try ... catch 동작 알고리즘
// 1. try { ... } 코드 실행
// 2-1. 오류가 발생하지 않은 경우, 내부 코드가 실행 됨 (catch 블록 무시)
// 2-2. 오류가 발생했다면, try 코드 중단 catch 블록으로 흐름이 넘어 감


// JavaScript 엔진은 코드를 읽고 난 후 코드를 실행
// 그러므로 try ... catch 문은 유효한 코드에서만 오류를 처리할 수 있음
// 이러한 오류 유형을 "런타임 오류" 또는 "예외(exception)"라고 부름


// try ... catch는 동기적으로 동작하므로 비동기 처리 과정 내부에서 사용해야 함


// 오류 객체(Error Object)
// - name, message, stack 정보 제공


// 직접 오류 객체 생성
// throw 연산자는 오류 객체를 생성할 때 사용 됨
// 생성 가능한 오류 객체
// - Error
// - TypeError
// - SyntaxError
// - ReferenceError


// finally 절
// 오류가 있던, 없던 상관없이 항상 실행
// try ... catch를 빠져나가는 어떠한 경우에도 항상 실행
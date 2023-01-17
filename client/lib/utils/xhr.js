/* readyState
0: uninitalized //초기화
1: loading // 로딩 중
2: loaded //로딩 완료
3:interative //작동 중
4:complete //완료
 */

// GET통신 
// function xhrData(method, url){
//   const xhr = new XMLHttpRequest();
//     //비동기 통신 오픈
//   xhr.open('GET', url);
//   //readystate가 변경됐을 때 발생하는 이벤트
//   xhr.addEventListener('readystatechange', ()=>{
//     if(xhr.status >= 200 && xhr.status < 400){
//       if(xhr.readyState === 4){
//         console.log('통신 성공');
//         //링크의 JSON데이터가 나옴(아직 string)
//         console.log(xhr.response); 
//         //JSON데이터가 JSON.parse()로 객체화 시켜서 객체가 담긴 배열이 됨
//         console.log(JSON.parse(xhr.response)); 
//       }
//     }else{
//       console.error('통신 실패');
//     }
//   });

//   //서버에 요청
//   xhr.send();
  
// }

//POST 통신
// function xhrData(method, url, body){
//   const xhr = new XMLHttpRequest();
//     //비동기 통신 오픈
//   xhr.open(method, url);
//   xhr.addEventListener('readystatechange', ()=>{
//     //객체 구조 분해 할당(변수명이 객체의 프로퍼티와 이름이 똑같아야 함)
//     const {status, readyState, response} = xhr; 
//     if(status >= 200 && status < 400){
//       if(readyState === 4){
//         console.log('통신 성공');
//         console.log(JSON.parse(response)); //객체화
//       }
//     }else{
//       console.error('통신 실패');
//     }
//   });

//   //서버에 요청
//   xhr.send(JSON.stringify(body)); //문자화
// }

function xhrData({//기본값 설정
  method = 'GET', 
  url = '', 
  body = null,  
  onSuccess = null, 
  onFail = null,
  headers = {
    'Content-Type': 'application/json', //이건 적어줘야 함
    'Access-Control-Allow-Origin' : '*' //이걸 적어놔도 우리가 해결할 수 있는 문제가 아님
  }
}){
  const xhr = new XMLHttpRequest();
  //역시 객체 구조 분해 할당,
  // const {method, url, body} = options;// 근데 위에 파라미터에서 바로 구조분해할당. 
  //비동기 통신 오픈
  xhr.open(method, url);

  // Object.entries(headers).forEach(([key, value]) => { //이것도 구조 분해 할당 활용한거구나. 
  //   xhr.setRequestHeader(key, value);
  // });

  xhr.addEventListener('readystatechange', ()=>{
  //객체 구조 분해 할당(변수명이 객체의 프로퍼티와 이름이 똑같아야 함)
  const {status, readyState, response} = xhr; 
  if(status >= 200 && status < 400){
    if(readyState === 4){
      console.log('통신 성공');
      onSuccess(JSON.parse(response)); //객체화
      // return JSON.parse(response); //비동기 통신을 하고 있어서 return이 안됨. 
    }
  }else{
    onFail('통신 실패');
    // console.error('통신 실패');
  }
});

  //서버에 요청
  xhr.send(JSON.stringify(body)); //문자화
}

// xhrData('GET', 'https://jsonplaceholder.typicode.com/users');

// xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
//     "name": "Kimnahee",
//     "username": "nahee",
//     "email": "nnn@xxxx.com",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "010-1234-5678",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
// });

//얘는 인수를 객체하나로만 받을 때 
// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   method:'GET',
//   body: null,
//   headers: {
//       'Content-Type': 'application/json'
//   }
// });

// console.log(xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users'
// }));//undefined 나옴

xhrData({
  url: 'https://jsonplaceholder.typicode.com/users', 
  onSuccess: (result)=>{
    console.log(result);
  }, 
  onFail: (err)=>{
    console.error(err);
  }
});






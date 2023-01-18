/* readyState
0: uninitalized //초기화
1: loading // 로딩 중
2: loaded //로딩 완료
3:interative //작동 중
4:complete //완료
 */

import { typeError } from '../error/typeError.js';


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

export function xhrData({//기본값 설정
  method = 'GET', 
  url = '', 
  body = null,  
  onSuccess = null, 
  onFail = null,
  headers = {
    'Content-Type': 'application/json', //이건 적어줘야 함
    'Access-Control-Allow-Origin' : '*' //이걸 적어놔도 우리가 해결할 수 있는 문제가 아님
  }, 
  // {}={}
}={}){
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

// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users', 
//   onSuccess: (result)=>{
//     console.log(result);
//   }, 
//   onFail: (err)=>{
//     console.error(err);
//   }
// });

//xhrData 함수(객체) 안에 get이라는 함수 정의(메서드) (아무래도 함수는 객체니까..추가할 수 있나봐.)
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url, //url:url은 왼쪽처럼 단축표기로 쓸 수 있음.
    onSuccess, 
    onFail 
  })
};

//xhrData 함수(객체) 안에 post라는 함수 정의(메서드)
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    url, 
    onSuccess, 
    onFail, 
    body
  })
};

//xhrData 함수(객체) 안에 delete라는 함수 정의(메서드)
xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE', 
    url, 
    onSuccess, 
    onFail
  })
};

//xhrData 함수(객체) 안에 put라는 함수 정의(메서드)
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    url, 
    onSuccess, 
    onFail, 
    body
  })
};

/* -------------------------------------------------------------------------- */
/*                                위에서 만든 메서드 사용                               */
/* -------------------------------------------------------------------------- */
/*
//get 메서드 사용(실행)
xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    console.log(result);
  }, 
  (err) => {
    console.log(err);
  }
);

//post 메서드 사용(실행)
xhrData.post(
  'https://jsonplaceholder.typicode.com/users',
  {
    "name": "Kimnahee",
    "username": "nahee",
    "email": "nnn@xxxx.com"
  }, 
  (result) => {
    console.log(result);
  }, 
  (err) => {
    console.log(err);
  }
);

//delete 메서드 사용(실행)
xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/11', 
  (result) => {
    console.log(result);
  }, 
  (err) => {
    console.log(err);
  }
);

//put 메서드 사용(실행)
xhrData.put(
  'https://jsonplaceholder.typicode.com/users/1', 
  {
    'name': 'kimnahee'
  },
  (result) => {
    console.log(result);
  }, 
  (err) => {
    console.log(err);
  }
);
*/



/* -------------------------------------------------------------------------- */
/*                                   promise                                  */
/* -------------------------------------------------------------------------- */
const defaultOptions = {
  url: '', 
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }, 
  body: null
}


export function xhrPromise(options = {}){
  const xhr = new XMLHttpRequest;

  // 아래 두 줄은 아까 delay.js에서 했던 것
  // let config = {...defaultOptions}; //참조가 아닌 복사(얕은)
  // config = {...config, ...options};
  //이번엔 Object.assign을 사용해서 객체 합성 시켜줘 봄
  //즉 {...config, ...options}랑 Object.assign({}, defaultOptions, options) 하는 일이 같다.
  const {method, url, body, header} = Object.assign({}, defaultOptions, options);

  if(!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.')
  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);//return으로 종료되기 전에 써줘야 함. 

  return new Promise((resolve, reject)=>{
    xhr.addEventListener('readystatechange', ()=>{
      const {status, readyState, response} = xhr; 

      if(status >= 200 && status < 400){
        if(readyState === 4){
          resolve(JSON.parse(response));
        }else{
          reject('에러라구요~ 운동해야하는데~');
        }
      }
    })
  })
}

// xhrPromise({
//   url:'https://jsonplaceholder.typicode.com/users'
// })
// .then((res) => {
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

//get, post, put, delete 메서드 추가
xhrPromise.get = (url) => {
  return xhrPromise({
    url
  })
}

xhrPromise.post = (url, body) =>{
  return xhrPromise({
    url, 
    body, 
    method: 'POST'
  })
}

xhrPromise.put = (url, body) =>{
  return xhrPromise({
    url, 
    body, 
    method: 'PUT'
  })
}

xhrPromise.delete = (url) =>{
  return xhrPromise({
    url,  
    method: 'DELETE'
  })
}

//get메서드 사용해보기
// xhrPromise
// .get('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })
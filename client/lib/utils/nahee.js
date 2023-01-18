const defaultOptions = {
  method: 'GET', 
  mode: 'cors', 
  body: null, 
  cache: 'no-cache', 
  credential: 'same-origin', 
  redirect: 'follow', 
  referrerPolicy: 'no-referrer', 
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

export const nahee = async (options = {}) => {

  const {url, ...restOptions} = { //url은 왜 써준건지 모르겠네
    ...defaultOptions, 
    ...options, 
    headers: {...defaultOptions.headers, ...(options.headers ?? {})}
  } //얕은 복사여서 객체 안의 객체인 headers는 위와 같이 따로 설정해주어야 한다. 

  let response = await fetch(url, restOptions);

  if(response.ok){
    response.data = await response.json();
  }

  return response;
}

nahee.get = (url, options) => {
  return nahee({
    url, 
    ...options
  })
}

nahee.post = (url, body, options) => {
  return nahee({
    method: 'POST',
    url, 
    body: JSON.stringify(body), 
    ...options
  })
}

nahee.put = (url, body, options) => {
  return nahee({
    method: 'PUT',
    url, 
    body: JSON.stringify(body), 
    ...options
  })
}

nahee.delete = (url, options) => {
  return nahee({
    method: 'DELETE',
    url, 
    ...options
  })
}

// console.log(await nahee());


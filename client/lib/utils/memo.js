//memoization (클로저도 이용)
export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if(!callback) return cache[key];

    if(cache[key]){
      console.warn(`${key}값은 이미 캐시된 값이 존재합니다.`);
      return;
    } 

    cache[key] = callback();
    // console.log(cache)
  }
})();

// memo('name', 'tiger');
// memo('cube', ()=> document.querySelector('#cube')); //set
// memo('cube', ()=> '이것은 큐브'); //warn
// console.log(memo('cube')); //get


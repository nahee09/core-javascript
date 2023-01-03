/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


// const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const calculateTotal 
// = (moneyA, moneyB, moneyC, moneyD) => moneyA + moneyB + moneyC + moneyD;

const calculateTotal = (...args) => {
  let total = 0;
  args.forEach(item => total += item);
  
  //args.reduce((acc, item)=> acc + item)

  return total;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

//console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a+b+c+d;



// 화살표 함수와 this
function normalFunction(){
  console.log('일반함수: ', this);
}

const arrowFunction = () => {
  console.log('화살표함수: ', this);
}

normalFunction();
arrowFunction();

const user = {
  name:'tiger',
  age:32,
  address:'서울시 중랑구 면목동',
  grades:[80,90,100],
  totalGrades: function (){
    function foo(){
      console.log('foo : ', this);
    }

    const bar = () =>{
      console.log('bar : ', this);
    }
    
    // foo();
    foo.call(user) // user
    bar() // user object

  }
}


console.log(user.totalGrades());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; //특정 문자를 반복 횟수만큼 반복시켜주는 함수를 정의해보세요~ 

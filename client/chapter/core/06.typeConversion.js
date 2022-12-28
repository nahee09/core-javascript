/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(YEAR, String(YEAR));

// undefined, null
console.log(undefined, String(undefined));
console.log(null, String(null));

// boolean
let isKind = true; 
console.log(isKind, String(isKind), typeof String(isKind));
console.log(isKind + '', typeof(isKind + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */
console.log('---------------');
// undeinfed
console.log(undefined, Number(undefined));

// null
console.log(null, Number(null));

// boolean
let cute = true;
console.log(cute * 1);

// string
let num = '    13';
console.log(num*4);//공백을 알아서 제거해서 연산함 

// numeric string
let width = '230.123px';
console.log(Number(width));
console.log(parseInt(width, 10));//숫자만 빼오는... 
console.log(parseFloat(width, 10));//소수점까지...

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(''));
console.log(Boolean(' '));
console.log(!null);
/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';
console.log('message: ',message);

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength: ',stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
// message[3] = 'i';//이건 안 됨 

// message = 'more'+ message[3];//부분 추출해서 새롭게 만드는 건 가능
// console.log(message); 



// 부분 문자열 추출
let slice = message.slice(0, 3); //'Les' [0], [1], [2]의 값
// let slice = message.slice(-5, -1); //'more'
console.log(slice);
//subString이랑 slice랑 머가 다르다고 하셨지.
let subString = message.substring(0, 3);
console.log(subString);
// let subStr; //이건 없어짐


// 문자열 포함 여부 확인
let indexOf = message.indexOf('e'); //존재하면 존재하는 위치인덱스 반환, 없으면 -1 반환
console.log(indexOf);
let lastIndexOf = message.indexOf('e'); //마지막에서부터 찾아줌.
console.log(lastIndexOf);
let includes = message.includes('less'); //포함여부
console.log(includes);
let startsWith = message.startsWith('L'); //첫글자
console.log(startsWith);
let endsWith = message.endsWith('.'); //마지막 문자 
console.log(endsWith);


// 공백 잘라내기
let trimLeft;
let trimRight;

console.log('   this is me   '.trim()); //근데 trim()은 문자 사이 공백은 안 지워줌 
//문자 안 공백도 지워주려면 정규표현식 이용 
let trim = message.replace(/\s*/g, '');
console.log(trim);


// 텍스트 반복
let repeat = message.repeat(3);
console.log(repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log(toLowerCase);
let toUpperCase = message.toUpperCase();
console.log(toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log(toCamelCase('is-more')); //'isMore'
console.log(toPascalCase('is-more')); //'IsMore'
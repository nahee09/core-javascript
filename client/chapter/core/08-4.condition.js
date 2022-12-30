/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */


const WIDTH = '10px';

console.log(null || WIDTH); //10px
console.log(null ?? WIDTH); //10px

console.log(undefined || WIDTH); //10px
console.log(undefined ?? WIDTH); //10px

console.log(false || WIDTH); //10px
console.log(false ?? WIDTH); //false
//(false는 일부러 값을 넣었다고 보기 때문에 정의 되어 있다고 보고 false를 출력)
//??(nullish)는 null이나 undefined이 아닌, defined된 값을 반환한다! 

console.log('' || WIDTH); //10px
console.log('' ?? WIDTH); //''



let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = 
  (emailAddress === undefined || emailAddress === null)? 
  'user@company.io': emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io' ;

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
receivedEmailAddress = 'user@company.io' || emailAddress;



// ?? → 첫번째 정의된(defined) 값을 반환
// function earth(){
//   let water = true;
//   let apple = {
    
//   }

//   function tiger(){
//     console.log(water);
//   }

//   return tiger;
// }

function earth(){
  let water = true;
  let apple = {
    
  }

  return function(){ //tiger라는 이름은 중요하지 않으므로 없애버림. 
    console.log(water);
  }
}

const ufo = earth();//새로운 환경이 만들어진 것 (참조는 아니고 복사도 아니고)


//간단 실무 예제
function handler(){

  let isClicked = false;

  return function () {

    if(isClicked === true){
      
      this.style.background = 'transparent';
    }else{
      this.style.background = 'red';
    }
    isClicked = !isClicked;
  }
}


document.querySelector('.first').addEventListener('click',handler())
//여기서는 this가 document.querySelector('.first')



// isClicked를 접근할 수 없음.

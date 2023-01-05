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

const ufo = earth();


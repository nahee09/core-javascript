let title = "환영합니다.";
let house = {
  title: "집",
  room: {
    title: "방",
    getTitle: function(){
      return this.title;
    }
  }
}

let fn = house.room.getTitle;
console.log(fn());
// 환영합니다.가 아니라 undefined. 맨 위 title이 var로 선언 되어 있으면 환영합니다. 나옴

console.log(house.room.getTitle());
//방

house.getTitle = house.room.getTitle;
console.log(house.getTitle());
//집 

//-------------call 함수 사용 -----------------
let fn2 = house.room.getTitle;
console.log(fn2.call(house));
//집 

console.log(house.room.getTitle.call(house));
//집 

house.getTitle = house.room.getTitle;
console.log(house.getTitle.call(house));
//집
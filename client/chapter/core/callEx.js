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
fn();
// 환영합니다.가 아니라 undefined. 맨 위 title이 var로 선언 되어 있으면 환영합니다. 나옴

house.room.getTitle();
//방

house.getTitle = house.room.getTitle;
house.getTitle();
//집 

//-------------call 함수 사용 -----------------
let fn2 = house.room.getTitle;
fn2.call(house);
//집 

house.room.getTitle.call(house);
//집 

house.getTitle = house.room.getTitle;
house.getTitle.call(house);
//집
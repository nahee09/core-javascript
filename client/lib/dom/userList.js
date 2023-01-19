import { insertLast } from "../dom/insert.js";
// 유저 카드 생성 함수
const createUserCard = ({
  id = '', 
  name = '', 
  email = '', 
  website = ''
} = {}) => {
  // const {id, name, email, website = '사이트'} = user;
  return /*html*/`
  <article class="user-card" data-index="user-${id}">
    <h3 class="user-name">${name}</h3>
    <div class="user-resouce-info">
      <div>
        <a class="user-email" href="mailto:${email}">${email}</a>
      </div>
      <div>
        <a class="user-website" href="http://${website}" 
        target="_blank" rel="noopener noreferer">${website}</a>
      </div>
    </div>
    <button class="delete">삭제</button>
  </article>
  `
}

// 유저 카드 랜더링 함수
export function renderUserCard(target, data){
  insertLast(target, createUserCard(data));
}

// 로딩 중 생성
function createSpinner(size = 100, loadingMessage = '유저 정보를 가져오는 중...'){
  return /* html */ `
  <figure class = "loadingSpinner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(241, 242, 243, 0); display: block;" width="${size}px" height="${size}px" viewBox="0 0 100 100 " preserveAspectRatio="xMidYMid">
    <style type="text/css">
      .ldio-54o11ylmtsn-st0{opacity:0.8;fill:none;stroke-width:0.4811;stroke-miterlimit:10;}
      .ldio-54o11ylmtsn-st2{opacity:0.8;}
      .ldio-54o11ylmtsn-st3{fill:none;stroke-width:0.5;stroke-miterlimit:10;}
      .ldio-54o11ylmtsn-st4{fill:none;stroke-width:0.4694;stroke-miterlimit:10;}
    </style>
    <g style="opacity:0.5">
      <polygon stroke="#1d3f72" class="ldio-54o11ylmtsn-st0" points="41.5 62 30 62 24.2 72 30 82 41.5 82 47.3 72"></polygon>
      <polygon stroke="#1d3f72" class="ldio-54o11ylmtsn-st0" points="58.8 72 47.3 72 41.5 82 47.3 92 58.8 92 64.6 82"></polygon>
      <polygon stroke="#1d3f72" class="ldio-54o11ylmtsn-st0" points="76.2 62 64.6 62 58.8 72 64.6 82 76.2 82 81.9 72"></polygon>
      <polygon stroke="#1d3f72" class="ldio-54o11ylmtsn-st0" points="41.5 42 30 42 24.2 52 30 62 41.5 62 47.3 52"></polygon>
      <polygon stroke="#1d3f72" class="ldio-54o11ylmtsn-st0" points="58.8 12 47.3 12 41.5 22 47.3 32 58.8 32 64.6 22"></polygon>
      <polygon stroke="#1d3f72" class="ldio-54o11ylmtsn-st0" points="58.8 32 47.3 32 41.5 42 47.3 52 58.8 52 64.6 42"></polygon>
      <polygon stroke="#1d3f72" class="ldio-54o11ylmtsn-st0" points="76.2 22 64.6 22 58.8 32 64.6 42 76.2 42 81.9 32"></polygon>
    </g>
    <g>
      <path fill="#5699d2" d="M48.3 56.8l-4.4 1.5c-0.9-1.3-1.5-2.7-1.7-4.3l-1.9 0.3c0.5 2.6 1.7 5 3.6 6.9c1.9 1.9 4.3 3.1 6.9 3.6 l0.3-1.9c-1.6-0.3-3-0.9-4.3-1.7L48.3 56.8z"></path>
      <path fill="#5699d2" d="M57.8 47.2l4.4-1.5c0.9 1.3 1.5 2.7 1.7 4.3l1.9-0.3c-0.5-2.6-1.7-5-3.6-6.9c-1.9-1.9-4.3-3.1-6.9-3.6L55 41.1 c1.6 0.3 3 0.9 4.3 1.7L57.8 47.2z"></path>
      <path fill="#5699d2" d="M62.2 58.2l-4.4-1.5l1.5 4.4C58 62 56.5 62.6 55 62.9l0.3 1.9c2.6-0.5 5-1.7 6.9-3.6c1.9-1.9 3.1-4.3 3.6-6.9 L64 53.9C63.7 55.5 63.1 56.9 62.2 58.2z"></path>
      <path fill="#5699d2" d="M43.9 42.8c-1.9 1.9-3.1 4.3-3.6 6.9l1.9 0.3c0.3-1.6 0.9-3 1.7-4.3l4.4 1.5l-1.5-4.4c1.3-0.9 2.7-1.5 4.3-1.7 l-0.3-1.9C48.2 39.7 45.8 40.9 43.9 42.8z"></path>
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="4s" keyTimes="0;1" values="0 53.064 52;360 53.064 52"></animateTransform>
    </g>
    <g class="ldio-54o11ylmtsn-st2">
      <path fill="#5699d2" d="M36 61.9c-1.7-3-2.7-6.4-2.7-9.9c0-10.9 8.8-19.7 19.7-19.7v1c-10.3 0-18.8 8.4-18.8 18.8 c0 3.3 0.9 6.5 2.5 9.4L36 61.9z"></path>
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2s" keyTimes="0;1" values="360 53.064 52;0 53.064 52"></animateTransform>
    </g>
    <g class="ldio-54o11ylmtsn-st2">
      <path fill="#5699d2" d="M57 75.3l-0.5-3c9.9-1.7 17.2-10.2 17.2-20.3c0-11.4-9.2-20.6-20.6-20.6S32.5 40.6 32.5 52 c0 1.6 0.2 3.2 0.5 4.7l-3 0.7c-0.4-1.8-0.6-3.6-0.6-5.4c0-13.1 10.6-23.7 23.7-23.7S76.7 38.9 76.7 52 C76.7 63.6 68.4 73.4 57 75.3z"></path>
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.332s" keyTimes="0;1" values="0 53.064 52;360 53.064 52"></animateTransform>
    </g>
    <g>
      <path fill="#5699d2" d="M90.5 45.4c-1.5-8.8-6.2-16.8-13-22.5l0 0c-3.4-2.9-7.3-5.1-11.4-6.6s-8.5-2.3-13-2.3v2.4v1.4v2.4 c3.7 0 7.4 0.6 10.9 1.9l0.8-2.3c0 0 0 0 0 0c3.7 1.4 7.2 3.4 10.3 5.9l1.2-1.5L75 25.8c0 0 0 0 0 0l-1.5 1.8 c5.7 4.8 9.6 11.5 10.9 18.8l3.8-0.7c0 0 0 0 0 0L90.5 45.4z"></path>
      <path fill="#5699d2" d="M29.7 22l4.7 6.1c3.5-2.8 7.5-4.6 11.9-5.6l-1.7-7.5C39.2 16.2 34.2 18.5 29.7 22z"></path>
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2s" keyTimes="0;1" values="360 53.064 52;0 53.064 52"></animateTransform>
    </g>
    <g class="ldio-54o11ylmtsn-st2">
      <path fill="#5699d2" d="M53.1 92.4v-1c21.8 0 39.5-17.7 39.5-39.5c0-21.8-17.7-39.5-39.5-39.5c-15.8 0-30 9.4-36.2 23.8L15.9 36 c6.4-14.8 21-24.4 37.1-24.4c22.3 0 40.4 18.1 40.4 40.4C93.5 74.3 75.3 92.4 53.1 92.4z"></path>
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.332s" keyTimes="0;1" values="0 53.064 52;360 53.064 52"></animateTransform>
    </g>
    <polygon fill="#d8ebf9" points="57.4 51.5 53.5 51.5 53.5 47.7 52.6 47.7 52.6 51.5 48.7 51.5 48.7 52.5 52.6 52.5 52.6 56.3 53.5 56.3 53.5 52.5 57.4 52.5 ">
      <animate attributeName="opacity" repeatCount="indefinite" dur="1.332s" keyTimes="0;0.4;0.5;0.9;1" values="0;0;1;1;0"></animate>
    </polygon>
    <g>
      <path fill="#5699d2" d="M39.7 28.5l0.6 1c3.9-2.2 8.3-3.4 12.8-3.4V25C48.4 25 43.7 26.2 39.7 28.5z"></path>
      <path fill="#5699d2" d="M28.6 60.6l-1.1 0.4C31.3 71.8 41.6 79 53.1 79v-1.2C42.1 77.9 32.3 70.9 28.6 60.6z"></path>
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="4s" keyTimes="0;1" values="360 53.064 52;0 53.064 52"></animateTransform>
    </g>
    <g>
      <polyline stroke="#71c2cc" class="ldio-54o11ylmtsn-st3" points="35.5 77.5 27.5 89.5 24 89.5"></polyline>
      <rect stroke="#71c2cc" x="7" y="86" class="ldio-54o11ylmtsn-st4" width="17" height="7"></rect>
    </g>
    <g>
      <polyline stroke="#71c2cc" class="ldio-54o11ylmtsn-st4" points="59 22 69 12 82 12"></polyline>
      <circle stroke="#71c2cc" class="ldio-54o11ylmtsn-st4" cx="87" cy="12" r="5"></circle>
    </g>
  </svg>
  <figcaption>${loadingMessage}</figcaption>
</figure>
  `
}
// 로딩 중 랜더링
export function renderSpinner(target){
  insertLast(target, createSpinner(target));
}

// 비어있다고 알려주는 그림 생성
function createEmptyCard(size = 200, errorMessage = '표시할 데이터가 존재하지 않습니다.'){
  return /* html */`
  <figure class="empty-user-card">
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      <mask id="mask0_50_2137" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="20" width="160" height="160">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      </mask>
      <g mask="url(#mask0_50_2137)">
      <path d="M59.1667 121H140.833L155 134H45L59.1667 121Z" fill="url(#paint0_linear_50_2137)"/>
      <rect x="63" y="72" width="74" height="82" rx="3" fill="#E6EAF5"/>
      <path d="M76 134H45V235H155V134H125L121 147H80L76 134Z" fill="url(#paint1_linear_50_2137)"/>
      </g>
      <path d="M148.548 28C156.53 28 163 34.4702 163 42.4516C163 50.433 156.53 56.9032 148.548 56.9032H139.162L132.385 64.2787C131.549 65.1879 130.032 64.5968 130.032 63.362V55.8526C124.736 53.7088 121 48.5165 121 42.4516C121 34.4702 127.47 28 135.452 28H148.548Z" fill="url(#paint2_linear_50_2137)"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 150.807 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 141.774 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 132.742 42.4514)" fill="#F4F7FC"/>
      <path d="M99.024 121.356C98.192 121.356 97.488 121.148 96.912 120.732C96.336 120.284 96.048 119.564 96.048 118.572C96.048 118.06 96.144 117.436 96.336 116.7C96.56 115.932 96.864 115.132 97.248 114.3C97.632 113.436 98.112 112.588 98.688 111.756C99.264 110.892 99.936 110.092 100.704 109.356C101.28 108.78 101.76 108.252 102.144 107.772C102.56 107.292 102.88 106.844 103.104 106.428C103.328 105.98 103.488 105.548 103.584 105.132C103.68 104.684 103.728 104.188 103.728 103.644C103.728 102.332 103.36 101.452 102.624 101.004C101.888 100.524 101.008 100.3 99.984 100.332C98.96 100.364 98.048 100.572 97.248 100.956C96.448 101.34 96.048 101.948 96.048 102.78C96.048 103.612 95.68 104.236 94.944 104.652C94.208 105.068 93.456 105.276 92.688 105.276C91.728 105.244 91.04 105.02 90.624 104.604C90.208 104.188 90 103.58 90 102.78C90 101.66 90.256 100.636 90.768 99.7077C91.312 98.7477 92.032 97.9317 92.928 97.2597C93.856 96.5877 94.928 96.0597 96.144 95.6757C97.392 95.2597 98.72 95.0357 100.128 95.0037C101.504 94.9717 102.784 95.1477 103.968 95.5317C105.152 95.8837 106.16 96.4437 106.992 97.2117C107.856 97.9797 108.512 98.9237 108.96 100.044C109.44 101.164 109.664 102.46 109.632 103.932C109.6 105.212 109.344 106.428 108.864 107.58C108.416 108.7 107.504 109.916 106.128 111.228C105.2 112.124 104.464 112.908 103.92 113.58C103.376 114.22 102.96 114.812 102.672 115.356C102.384 115.868 102.192 116.38 102.096 116.892C102.032 117.404 102 117.964 102 118.572C102 119.5 101.712 120.204 101.136 120.684C100.56 121.132 99.856 121.356 99.024 121.356ZM99.024 131.724C99.952 131.724 100.72 131.42 101.328 130.812C101.968 130.172 102.288 129.388 102.288 128.46C102.288 127.532 101.968 126.764 101.328 126.156C100.72 125.516 99.952 125.196 99.024 125.196C98.096 125.196 97.312 125.516 96.672 126.156C96.064 126.764 95.76 127.532 95.76 128.46C95.76 129.388 96.064 130.172 96.672 130.812C97.312 131.42 98.096 131.724 99.024 131.724Z" fill="url(#paint3_linear_50_2137)"/>
      <defs>
      <linearGradient id="paint0_linear_50_2137" x1="144.366" y1="135.174" x2="48.6921" y2="120.877" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      <linearGradient id="paint1_linear_50_2137" x1="102.879" y1="231.936" x2="102.711" y2="163.972" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D4D9E3"/>
      <stop offset="1" stop-color="#D2D5DC"/>
      </linearGradient>
      <linearGradient id="paint2_linear_50_2137" x1="121.687" y1="69.0469" x2="158.543" y2="23.4883" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7ABB6"/>
      <stop offset="1" stop-color="#C7CCD7"/>
      </linearGradient>
      <linearGradient id="paint3_linear_50_2137" x1="105" y1="138.5" x2="72.6675" y2="134.128" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      </defs>
      </svg>
      
    <figcaption>${errorMessage}</figcaption>
  </figure>
  `
}

// 비어있다고 알려주는 그림 랜더링
export function renderEmptyCard(target){
  insertLast(target, createEmptyCard());
}


// console.log(createUserCard(1, 'tiger', 'tiger@euid.dev', 'tiger.com'));
// console.log( createUserCard({
//   id:1,
//   name:'tiger', 
//   email: 'tigerr@euid.dev'
// }) );


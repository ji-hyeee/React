// import React from "react"

// /**
// Challenge: find out what happens if we try to append JSX
// to our div#root using .append() instead of ReactDOM

// 1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
// 2. Select the div with the ID of "root" and use `.append()` to append
//    your JSX
// 3. See if you can guess what will show up in the browser before running
//    the code
// 4. See if you can explain what actually shows up in the browser
//  */

// const page = (
//   <div>
//     <h1>hye's life</h1>
//     <ul>
//       <li>eat</li>
//       <li>sleep</li>
//       <li>study</li>
//     </ul>
//   </div>
// )

// // document.getElementById("root").append(page);
// // [object Object] 일종의 문자열

// // 객체를 문자열화 해보자
// document.getElementById("root").append(JSON.stringify(page));

// // JSX 는 일반 자바스크립트를 반환한다 / 돔과 관련없음


import React from "react"
import ReactDOM from "react-dom" // 추가
/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
)

ReactDOM.render(page, document.getElementById("root")); // 렌더링 !
// document.getElementById("root").append(JSON.stringify(page))
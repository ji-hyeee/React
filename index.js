// 9. Build a React info site
// Goodbye, CDNs!

// scrimgba 에서 설정하는 것
// npx react 사용시 import 하는 내용 
import React from "react" // 추가
import ReactDOM from "react-dom" // 추가

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))

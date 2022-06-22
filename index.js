// 13. Build a React info site
// Custom Components

// (1)
// import React from "react"
// import ReactDOM from "react-dom"

// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

// // 재렌더링을 위하여
// // 요소를 직접 렌더링 > 변수에 요소 할당 > 함수를 사용


// (2)
// import React from "react"
// import ReactDOM from "react-dom"

// function temporaryName() {
//     return (
//         <div>
//             <img src="./react-logo.png" width="40px" />
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on GitHub</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(temporaryName(), document.getElementById("root"))

// // 요소를 함수안에 넣으면 다시 호출해도 기능이 동일하다
// // function 함수명(){
// //     return (
// //         요소
// //     )
// // }

// // ReactDOM.render(함수명(), document.getElementById("root"))
// // 요소를 만들었을 때와 동일하게 작동한다 !


// (3)
import React from "react"
import ReactDOM from "react-dom"

function TemporaryName() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))

// 컴포넌트 작성을 위한 방법 90가지 중 ...
// 1. Camel Case
// TemporaryName()

// 2. 렌더링시 HTML 요소처럼 작성 (+ 대문자)
// <TemporaryName />



/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// 내가 푼 문제
import React from "react";
import ReactDOM from "react-dom"; // 소괄호 금지 !!!!

function MyPage() {
    return (
        <div>
            <h1>Hello</h1>
            {/* an ordered list!!! >>> ol */}
            <ul>
                <li>Blog</li>
                <li>Photo</li>
                <li>Cat</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyPage />, document.getElementById("root"));

// 풀이
import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <ol>
            <li>It's a popular library, so I'll be
                able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
                if I know React</li>
        </ol>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
// 15. Build a React info site
// Custom Components Quiz

// 1. What is a React component?
// 웹페이지를 구성하는 하나의 작은 단위
// JSX !== HTML
//// 풀이 : A function that returns React elements. (UI)

// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```
// Camel Case
// // oh no pascal case // 첫글자가 대문자 !


// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </ nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root"))
// ```
// like html element but still Camel Case // pascal cas too
// // Header() >>> <Header />

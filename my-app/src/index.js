import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// css import / 스타일로더로 쉽게 css 연결하기ㅣㄷㅁㄱ
import './index.css';
import App from './App';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 21. Build a React info site
// Quick mental outline of project

// import React from "react";
// import ReactDOM from "react-dom"

// function Page(){
//     return (
//         <>
//         // 내 생각
//         <Header>
//             <img/>
//             <span></span>
//             <span></span>
//         </Header>
//         <Main>
//             <h1></h1>
//             <ul>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//         </Main>
        
//         // 풀이
//         <div.container>
//             <nav>
//                 <img />
//                 <h3></h3>
//                 <h4></h4>
//             </nav>
//             <main>
//                 <h1></h1>
//                 <ul>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                 </ul>
//             </main>
//         </div.container>
//         </>
//     )
// }
// ReactDOM.render(<Page />, document.getElementById("root"))
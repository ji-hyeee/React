import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// css import / 스타일로더로 쉽게 css 연결하기
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

// 22. Build a React info stie
// Quick Figma Walkthrough
// 피그마 튜토리얼

// 23. Build a React info stie
// Project Setup
// 별도의 폴더를 만들었을 경우
// ./폴더명./파일명

// 24. Build a React info stie
// Navbar and Styling
// css 에는 기본요소보다는 className 을 사용하자
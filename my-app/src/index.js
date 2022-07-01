import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
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

reportWebVitals();

// 26. Build a React info stie
// Color the Bullets

// MDN ::marker
// 글머리 기호, 숫자가 포함된 목록 항목의 꾸미기 가능
// https://developer.mozilla.org/en-US/docs/Web/CSS/::marker

// 27. Build a React info stie
// Add Background logo
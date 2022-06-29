import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
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

reportWebVitals();

// 25. Build a React info stie
// Main Section
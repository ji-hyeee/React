import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App_container">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

reportWebVitals();
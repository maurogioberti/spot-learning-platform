import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/template/Header/Header';
import Main from './components/template/Main/Main';
import Footer from './components/template/Footer/Footer';
const App = () => (
  <div className="app d-flex flex-column vh-100">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
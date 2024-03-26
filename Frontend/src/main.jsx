// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './view/Home.jsx';
import About from './view/About.jsx';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// eslint-disable-next-line no-undef
reportWebVitals();

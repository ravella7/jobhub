import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/pages/layout/Layout';
import Home from './app/pages/home/home'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}>
        <Route index element={<Home/>}></Route>
        <Route path=':id' element={<>Single job</>}></Route>
      </Route>
     
      <Route path='*' element={<>404 error</>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

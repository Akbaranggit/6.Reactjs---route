import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './task_route_react/login';
import Error from './task_route_react/error';
import Dashboard from './task_route_react/dashboard';
import About from './task_route_react/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard/:nama' element={<Dashboard />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

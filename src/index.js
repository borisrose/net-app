import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import EmployeeListPage from './pages/EmployeeListPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretUp, faCaretDown);


const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },

  {
    path: "/employee-list",
    element: <EmployeeListPage />,
    errorElement: <ErrorPage />
  }






])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

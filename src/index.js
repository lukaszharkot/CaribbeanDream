import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './sites/App';
import Offer from './sites/Offer';
import Apply from './sites/Apply';
import Contact from './sites/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'oferta',
        element: <Offer />,
      },
      {
        path: 'zglos',
        element: <Apply />,
      },
      {
        path: 'kontakt',
        element: <Contact />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
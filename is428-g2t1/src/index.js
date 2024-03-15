import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import AudioFeatures from './pages/AudioFeatures';
import GenderEthnicity from './pages/GenderEthnicity';
import TimeSeries from './pages/TimeSeries';
import Analysis from './pages/Analysis';
import Error from './pages/Error';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: '/audio-features',
    element: <AudioFeatures />,
    errorElement: <Error />,
  },
  {
    path: '/gender-and-ethnicity',
    element: <GenderEthnicity />,
    errorElement: <Error />,
  },
  {
    path: '/time-series',
    element: <TimeSeries />,
    errorElement: <Error />,
  },
  {
    path: '/analysis',
    element: <Analysis />,
    errorElement: <Error />,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

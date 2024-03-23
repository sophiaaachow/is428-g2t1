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
import Results from './pages/Results';
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
    path: '/results',
    element: <Results />,
    errorElement: <Error />,
  }
]);

root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

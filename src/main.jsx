import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Layout/Root/Root';
import ErrorPage from './Components/Layout/ErrorPage/ErrorPage';
import Home from './Components/Layout/Home/Home';
import DashBoard from './Components/Layout/DashBoard/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children : [

      {

        path: '/',
        element: <Home/>

      },
      {

        path: 'dashboard',
        element: <DashBoard/>

      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

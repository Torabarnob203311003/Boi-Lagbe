import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Layout/Root/Root';
import ErrorPage from './Components/Layout/ErrorPage/ErrorPage';
import Home from './Components/Layout/Home/Home';
import DashBoard from './Components/Layout/DashBoard/DashBoard';
import BookDetails from './Components/Layout/Books/BookDetails';
import ListedBooks from './Components/Layout/Books/ListedBooks';

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

        path : 'books/:bookId',
        element : <BookDetails/>
      },
      {

        path : 'listedBooks',
        element : <ListedBooks/>
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

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
import Signin from './Components/Layout/From/Signin';
import Login from './Components/Layout/From/SignUp';
import Signup from './Components/Layout/From/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // This should wrap all pages, including SignIn
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "books/:bookId", element: <BookDetails /> },
      { path: "listedBooks", element: <ListedBooks /> },
      { path: "dashboard", element: <DashBoard /> },
     
    ],
    
  },

  { path: "signin", element: <Signin /> }, //
  { path: "signup", element: <Signup/> }, // ✅
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Error from './components/Error/Error';
import Home from './Pages/Home/Home';
import Genre from './Pages/Genre/Genre';
import Comedy from './Pages/Comedy/Comedy';
import Action from './Pages/Action/Action';
import Romance from './Pages/Romance/Romance';
import Topimdb from './Pages/Topimdb/Topimdb';
import MovieDetails from './Pages/MovieDetails/MovieDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/Genre",
        element: <Genre />,
      },
      {
        path: "/Comedy",
        element: <Comedy />,
      },
      {
        path: "/Action",
        element: <Action />,
      },
      {
        path: "/Romance",
        element: <Romance />,
      },
      {
        path: "/Topimdb",
        element: <Topimdb />,
      },
      {
        path: "/Moviedetails",
        element: <MovieDetails />,
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

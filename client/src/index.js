import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { Home } from './Pages/Home/Home';
import { PostDetail } from './Pages/PostDetail/PostDetail';
import { CreatePostPage } from './Pages/CreatePostPage/CreatePostPage';
import { About } from './Pages/About/About';
import { Login } from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "post/:id", element: <PostDetail /> },
      { path: "createpost", element: <CreatePostPage /> },
      { path: "about", element: <About/> },
      { path: "login", element: <Login/> },
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
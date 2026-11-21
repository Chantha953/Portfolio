import React from 'react';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <h1>Contact</h1>
      },
      {
        path: 'skills',
        element: <Skill/>
      },
      {
        path: 'projects',
        element: <h1>Projects</h1>
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App;
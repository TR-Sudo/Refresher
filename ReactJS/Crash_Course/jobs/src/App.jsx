import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} 
  from 'react-router-dom'


import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route>) // whatever is inside ths route will include that layout
  // * is a catch all path error page shows the page not found element
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
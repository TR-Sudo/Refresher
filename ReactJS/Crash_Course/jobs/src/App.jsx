import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/jobListings'
import ViewAllJobs from './components/ViewAllJobs'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
  </Route>) // whatever is inside ths route will include that layout
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
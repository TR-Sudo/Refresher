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
import JobPage,{jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'


function App() {
  // Add new job
  const addJob = async (newJob) => { // Post method to Json Server
    const res= await fetch('/api/jobs', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return
  }

  // Delete Job
  const deleteJob = async (id) => {
    const res= await fetch(`/api/jobs/${id}`, { // Delete method to Json Server
      method:'DELETE',
    })
    return
  }

  const updateJob = async (job) => {
    const res= await fetch(`/api/jobs/${job.id}`, { // PUT method to Json Server
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    return
  }
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>) // whatever is inside ths route will include that layout
    // * is a catch all path error page shows the page not found element
  
    // :id is dynamic
  );

  return <RouterProvider router={router}/>
}

export default App


// npm run build will make a dist folder

// dist is the development version 

// npm run preview will show the development version
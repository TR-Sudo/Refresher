import React, { useState } from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'
import { useEffect } from 'react'
import Spinner from './Spinner'

function JobListings({isHome=false}) {
  const [Jobs, setJobs] = useState([])// empty until filled by the useeffect during loadtime
  const [loading,setloading]= useState(true) // true until loading of json is complete

  useEffect(()=>{

    const fetchjobs = async () => {
      const apiUrl= isHome ? '/api/jobs' : '/api/jobs?_limit=3';
      try {
        const res= await fetch(apiUrl) // fetching data from server 
        const data = await res.json()
        setJobs(data)        
      } catch (error) {
        console.log(error)
      }finally{
        setloading(false)
      }  
    }  
    

    fetchjobs()


  },[])

  // react suspence will allow you to render while rendering or loading

  // react query makes data fetching a little easier but that's 3rd party 

  // react 19 allows you to use usehooks
  
  return (
    <>
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Browse Jobs" : "Recent Jobs"}
        </h2>
        {loading ? <Spinner loading={loading}/> : (
          <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Jobs.map((job)=>(
            <JobListing key={job.id} job={job}></JobListing>
          ))}
          </div>          
        </>
        )} 
          
      </div>
    </section>
    </>
  )
}

export default JobListings
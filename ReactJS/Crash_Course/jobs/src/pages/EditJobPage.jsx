
import { useParams,useLoaderData, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { toast } from 'react-toastify';


function EditJobPage({updateJobSubmit}) {

    const job=useLoaderData();

    const id= job.id;// passing id
    const [title,settitle]=useState(job.title);
    const [location,setlocation]=useState(job.location);
    const [type,setType]=useState(job.type);
    const [desc,setdesc]=useState(job.description);
    const [salary,setSalary]=useState(job.salary);
  
    const [companyName,setcompanyName]=useState(job.company.name);
    const [companydesc,setCompanyDesc]=useState(job.company.description);
  
    const [contactEmail,setEmail]=useState(job.company.contactEmail);
    const [contactPhone,setPhone]=useState(job.company.contactPhone);


    const nav=useNavigate();

    const SubmitForm= (e) =>{
        e.preventDefault();
    
        const description= desc;
    
        const updatedJob= {
            id,
            title,
            type,
            location,
            description,
            salary,
            company:{
                name: companyName,
                description: companydesc,
                contactEmail,
                contactPhone
            }
        }
        updateJobSubmit(updatedJob);// passing updated to app.jsx
        
        toast.success('Job updated successfully')
        
        return nav('/jobs')
    }

  return (
    <>
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={SubmitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <select
                id="type"
                value={type}
                
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                
                onChange={(e)=>setType(e.target.value) }
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <input
                type="text"
                id="title"
                value = {title}
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                onChange={(e)=> settitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                value={desc}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                onChange={(e)=>setdesc(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e)=> setSalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                value={location}
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required      
                onChange={(e)=>setlocation(e.target.value)}     
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e)=> setcompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companydesc}
                onChange={(e)=> setCompanyDesc(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e)=> setPhone(e.target.value)}
              />
            </div>

            <div>
              <button 
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default EditJobPage
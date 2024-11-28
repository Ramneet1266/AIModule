import React, { useState } from 'react'

export default function Form() {
    const [openModal, setOpenModal] = useState(1)
    const OpenModal = (modalNumber)=>{
        setOpenModal(modalNumber)
    }
  return (
    <div>
        { openModal == 1 &&

            <div class="bg-gray-100 rounded-2xl border-4 border-gray-700 mt-20 max-w-4xl mx-auto font-[sans-serif] p-6">
      <h1 className='text-center text-3xl font-semibold mb-10 mt-4'>Fill Up Your Resume</h1>

      <form>
            <h1 className='text-2xl font-semibold mb-10'>General Details</h1>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Full Name</label>
            <input name="name" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Full Name" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Designation</label>
            <input name="designation" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Designation" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Address</label>
            <input name="address" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Address" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Portfolio Link</label>
            <input name="portfolio" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Link" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Github Link</label>
            <input name="github" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Link" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input name="email" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Email" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Mobile No.</label>
            <input name="number" type="number" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Summary</label>
            <textarea name="summary" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Details About you " />
          </div>
       
        </div>

        <div class="!mt-12">
          <button onClick={()=>OpenModal(2)} type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Next
          </button>
        </div>
      </form>
    </div>
        }
    {
        openModal == 2 &&
        
        
       <div class="bg-gray-100 rounded-2xl border-4 border-gray-700 mt-20 max-w-4xl mx-auto font-[sans-serif] p-6">
      <h1 className='text-center text-3xl font-semibold mb-10 mt-4'> Fill Up Your Resume</h1>

      <form>
        <h1 className='text-2xl font-semibold mb-10'>Education</h1>
         <h1 className='text-xl font-semibold mb-5'>1. X/10th</h1>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">School Name</label>
            <input name="tenth" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter School Name" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Percentage</label>
            <input name="tenthP" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter in percentage" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Starting Year</label>
            <input name="tenthSY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2018)" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Ending Year</label>
            <input name="tenthLY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2019)" />
          </div>
          </div>
            <h1 className='text-xl font-semibold mb-5 mt-10'>2. XII/12th/Diploma</h1>
          <div class="grid sm:grid-cols-2 gap-8">
           <div>
            <label class="text-gray-800 text-sm mb-2 block">School/Institution Name</label>
            <input name="twelth" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter School Name" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Percentage</label>
            <input name="twelthP" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter in percentage" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Starting Year</label>
            <input name="twelthSY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2018)" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Ending Year</label>
            <input name="twelthLY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2019)" />
          </div>
          
        </div>
<h1 className='text-xl font-semibold mb-5 mt-10'>3. Degree</h1>
          <div class="grid sm:grid-cols-2 gap-8">
           <div>
            <label class="text-gray-800 text-sm mb-2 block">College Name</label>
            <input name="college" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter College Name" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Percentage</label>
            <input name="collegeP" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter in percentage" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Starting Year</label>
            <input name="collegeSY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2018)" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Ending Year</label>
            <input name="collegeLY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2019)" />
          </div>
          </div>
          <h1 className='text-xl font-semibold mb-5 mt-10'>4. Master's Degree</h1>
          <div class="grid sm:grid-cols-2 gap-8">
           <div>
            <label class="text-gray-800 text-sm mb-2 block">College Name</label>
            <input name="collegeM" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter College Name" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Percentage</label>
            <input name="collegeMP" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter in percentage" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Starting Year</label>
            <input name="collegeMSY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2018)" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Ending Year</label>
            <input name="collegeMLY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2019)" />
          </div>
          </div>
        <div class="!mt-12 flex gap-4">
          <button onClick={()=>OpenModal(1)} type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Back
          </button>
          <button onClick={()=>OpenModal(3)} type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Next
          </button>
        </div>
      </form>
    </div>
    }
     { openModal == 3 &&

            <div class="bg-gray-100 rounded-2xl border-4 border-gray-700 mt-20 max-w-4xl mx-auto font-[sans-serif] p-6">
      <h1 className='text-center text-3xl font-semibold mb-10 mt-4'>Fill Up Your Resume</h1>

      <form>
            <h1 className='text-2xl font-semibold mb-5'>Experience</h1>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Skills</label>
            <input name="skills" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Your Skills" />
          </div>
          </div>
          <h1 className='text-xl font-semibold mb-5 mt-10'>1. Experience</h1>
          <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Designation</label>
            <input name="designation" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Designation" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Company</label>
            <input name="company" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Company" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Starting Year</label>
            <input name="FSY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2019)" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Ending Year</label>
            <input name="FLY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2020)" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Role in Company</label>
            <textarea name="Frole" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Your Role in Company" />
          </div>
        </div>
          <h1 className='text-xl font-semibold mb-5 mt-10'>2. Experience</h1>
          <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Designation</label>
            <input name="designation" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Designation" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Company</label>
            <input name="company" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Company" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Starting Year</label>
            <input name="FSY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2019)" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Ending Year</label>
            <input name="FLY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2020)" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Role in Company</label>
            <textarea name="Frole" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Your Role in Company" />
          </div>
        </div>
          <h1 className='text-xl font-semibold mb-5 mt-10'>3. Experience</h1>
          <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Designation</label>
            <input name="designation" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Designation" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Company</label>
            <input name="company" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Company" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Starting Year</label>
            <input name="FSY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2019)" />
          </div>
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Ending Year</label>
            <input name="FLY" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Example (2020)" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Role in Company</label>
            <textarea name="Frole" type="text" class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Your Role in Company" />
          </div>
        </div>

        <div class="!mt-12 gap-4 flex">
          <button onClick={()=>OpenModal(2)} type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Back
          </button>
          <button type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
        }
    </div>
  )
}

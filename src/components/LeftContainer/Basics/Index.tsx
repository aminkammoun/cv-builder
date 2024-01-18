import React, { useEffect, useState } from 'react'
import { useResumeContext } from '../../../context/ResumeContext';
import { ResumeData } from '../../../types/types'
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Index: React.FC = () => {
  const { updateResumeData } = useResumeContext();
  const [resumeData, setResumeData] = useState<ResumeData>({
    basics: {
      firstName: '',
      lastName: '',
      phone: '',
      website: '',
      email: '',
      location: '',
      headline:''

    },
    education: [],
    experience: [],
    skills: [],
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;

    setResumeData((prevData) => ({
      ...prevData,
      basics: {
        ...prevData.basics,
        [name]: value,
      },
    }));
  };
  useEffect(() => {
    console.log('Updated ResumeData:', resumeData);
    updateResumeData(resumeData);
  }, [resumeData.basics]);
  return (
    <div>
      <div className="flex items-center">
      <UserCircleIcon className='w-6 h-6 mr-5'/> 
      <h1 className="block text-3xl font-bold ">Basics</h1>
      </div>
      <div className='flex justify-between items-center space-x-4'>
        <div>


          <label htmlFor="firstName" className="block text-sm font-bold ">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="given-name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-slate-900"
            value={resumeData.basics.firstName || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>


          <label htmlFor="lastName" className="block text-sm font-bold ">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="given-name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-slate-900"
            value={resumeData.basics.lastName || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="headline" className="block text-sm font-bold ">
          headline
        </label>

        <input
          type="text"
          name="headline"
          id="headline"
          autoComplete="tel"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-slate-900"
          value={resumeData.basics.headline || ''}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-2 mt-2 flex justify-between items-center space-x-4">

        <div className='space-y-2'>
          <label htmlFor="email" className="block text-sm font-bold ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={resumeData.basics.email || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-slate-900"
          /></div>
        <div className='space-y-2'>
          <label htmlFor="website" className="block text-sm font-bold ">
            Website
          </label>
          <input
            type="website"
            id="website"
            name="website"
            value={resumeData.basics.website || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-slate-900"
          /></div>
      </div>

      <div className="mb-2 flex justify-between items-center space-x-4">
        <div className='space-y-2'>
          <label htmlFor="phone" className="block text-sm font-bold ">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={resumeData.basics.phone || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-slate-900"
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor="location" className="block text-sm font-bold ">
            Location
          </label>
          <input
            type="location"
            id="location"
            name="location"
            value={resumeData.basics.location || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-slate-900"
          />
        </div>

      </div>
    </div>
  )
}

export default Index
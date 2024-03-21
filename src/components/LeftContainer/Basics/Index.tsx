import React, { useEffect, useState } from 'react'
import { useResumeContext } from '../../../context/ResumeContext';
import { ResumeData } from '../../../types/types'
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Input from '../../../partials/Input';

const Index: React.FC = () => {
  const { updateResumeData } = useResumeContext();
  const [resumeData, setResumeData] = useState<ResumeData>(JSON.parse(localStorage.getItem("resumeData")));



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
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
        <UserCircleIcon className='w-6 h-6 mr-5' />
        <h1 className="block text-3xl font-bold ">Basics</h1>
      </div>
      <div className='flex justify-between items-center space-x-4'>
        <div>

          <Input 
          placeholder={'first name'} 
          label={'First Name'} 
          type={'text'} 
          content={'firstName'} 
          value={resumeData.basics.firstName || ''}
          onChange={handleChange} />
        </div>
        <div>

          <Input 
          placeholder={'last name'} 
          label={'Last Name'} 
          type={'text'} 
          content={'lastName'} 
          value={resumeData.basics.lastName || ''}
          onChange={handleChange} />
          
          
        </div>
      </div>
      <div>
      <Input 
          placeholder={'headline'} 
          label={'headline'} 
          type={'text'} 
          content={'headline'} 
          value={resumeData.basics.headline || ''}
          onChange={handleChange} />

      </div>
      <div className="mb-2 mt-2 flex justify-between items-center space-x-4">

        <div className='space-y-2'>
        <Input 
          placeholder={'email'} 
          label={'email'} 
          type={'text'} 
          content={'email'} 
          value={resumeData.basics.email || ''}
          onChange={handleChange} />
           </div>
        <div className='space-y-2'>
        <Input 
          placeholder={'website'} 
          label={'website'} 
          type={'link'} 
          content={'website'}
          value={resumeData.basics.website || ''}
          onChange={handleChange} />
         
          </div>
      </div>

      <div className="mb-2 flex justify-between items-center space-x-4">
        <div className='space-y-2'>
        <Input 
          placeholder={'phone'} 
          label={'phone'} 
          type={'number'} 
          content={'phone'}
          value={resumeData.basics.phone || ''}
          onChange={handleChange} />
        </div>
        <div className='space-y-2'>
        <Input 
          placeholder={'location'} 
          label={'location'} 
          type={'text'} 
          content={'location'}
          value={resumeData.basics.location || ''}
          onChange={handleChange} />
        </div>

      </div>
    </div>
  )
}

export default Index
import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';
import { PhoneIcon, LinkIcon, InboxIcon, MapPinIcon } from '@heroicons/react/24/outline';
const Index: React.FC = () => {
  const { resumeData } = useResumeContext();
  
  return (
    <div className="basicStyle">
      <div className='text-center'>

        <span>{resumeData.basics.firstName} {resumeData.basics.lastName}</span> <br></br>
      </div>
      <div className='text-xl text-center'>

        <span >{resumeData.basics.headline}</span>
      </div>

      <div className='resume-container'>

        {
          resumeData.basics.location &&

          <div className="flex-1 resume-item flex justify-between">
            
            <span className='ml-1 flex items-center space-x-4'><MapPinIcon className='h-4 w-4 mr-3'  /> {resumeData.basics.location} </span>
            <span>|</span>
          </div>
        }
        {
          resumeData.basics.phone &&
          <div className="flex-1 resume-item flex justify-between">
            
            <span className='ml-1 flex items-center space-x-4'><PhoneIcon className='h-4 w-4 mr-3' /> {resumeData.basics.phone}</span>
            <span>|</span>
          </div>
        }
        {
          resumeData.basics.email &&

          <div className="flex-1 resume-item flex justify-between">
            
            <span className='ml-1 flex items-center space-x-4'><InboxIcon className='h-4 w-4 mr-3'/> {resumeData.basics.email} </span>
            <span>|</span>
          </div>
        }
        {
          resumeData.basics.website &&
          <div className="flex-1 resume-item flex items-center">
            <LinkIcon className='h-4 w-4 mr-3' />
            <span className='ml-1'> {resumeData.basics.website}</span>
          </div>
        }


      </div>
    </div>);
};

export default Index
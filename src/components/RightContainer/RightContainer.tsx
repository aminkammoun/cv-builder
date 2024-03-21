import React from 'react'
import { useResumeContext } from '../../context/ResumeContext';
import Tabs from './Tabs'
export const RightContainer = () => {
    const { resumeData } = useResumeContext();
    const clickme = ()=> {
        console.log(resumeData)
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }
  return (
    <div className='text-white'>
        <Tabs />
        <button className='btn btn-' onClick={()=>clickme()}>click me</button>


    </div>
  )
}

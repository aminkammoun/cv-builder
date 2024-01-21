import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';

const Index: React.FC = () => {
    const { resumeData } = useResumeContext();

    return (

        <div >
            {
                resumeData.education.length > 0 && <div>
                    <h1 className='text-2xl bold'>Education</h1>
                    <hr></hr>
                </div>
            }
            {
                resumeData.education.map((education) => {
                    return (
                        <div className="flex-1 resume-item  mt-2">
                            <div className="flex justify-between">
                                <div>
                                    <span className='ml-1 flex items-center space-x-4 font-bold'>{education.institution} </span>
                                    <span className='ml-1 flex items-center space-x-4'>{education.degree} </span>

                                </div>
                            <span className='ml-1 flex items-center space-x-4'>{education.startDate}- {education.endDate} </span>
                            </div>
                            <span className='ml-1 flex items-center space-x-4'>{education.summary} </span>

                        </div>
                    )
                })
            }


        </div>



    );
};

export default Index
import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';

const Index: React.FC = () => {
    const { resumeData } = useResumeContext();

    return (
        <div className="basicStyle">
            <div >
                {
                    resumeData.education.length> 0 && <div>
                        <h1 className='text-2xl bold'>Education</h1>
                        <hr></hr>
                    </div>
                }
                {
                    resumeData.education.map((education) => {
                        return (
                            <div className="flex-1 resume-item flex justify-between mt-2">
                                <div>

                                    <span className='ml-1 flex items-center space-x-4 font-bold'>{education.institution} </span>
                                    <span className='ml-1 flex items-center space-x-4'>{education.degree} </span>
                                </div>
                                <span className='ml-1 flex items-center space-x-4'>{education.graduationYear} </span>

                            </div>
                        )
                    })
                }


            </div>



        </div>
    );
};

export default Index
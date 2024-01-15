import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';

const Index: React.FC = () => {
    const { resumeData } = useResumeContext();

    return (
        <div className="basicStyle">
            <div >
                {
                    resumeData.experience.length> 0 && <div>
                        <h1 className='text-2xl bold'>Experience</h1>
                        <hr></hr>
                    </div>
                }
                {
                    resumeData.experience.map((experience) => {
                        return (
                            <div className="flex-1 resume-item flex justify-between mt-2">
                                <div>

                                    <span className='ml-1 flex items-center space-x-4 font-bold'>{experience.company} </span>
                                    <span className='ml-1 flex items-center space-x-4'>{experience.position} </span>
                                </div>
                                <span className='ml-1 flex items-center space-x-4'>{experience.startDate} - {experience.endDate} </span>

                            </div>
                        )
                    })
                }


            </div>



        </div>
    );
};

export default Index
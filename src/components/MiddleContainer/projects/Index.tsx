import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';
import MediumGlobalDisplay from '../../../partials/MediumGlobalDisplay';

const Index: React.FC = () => {
    const { resumeData } = useResumeContext();
    return (
        <div >
            {
              resumeData.projects && <MediumGlobalDisplay Bigtitle={'Projects'} data={resumeData.projects} />      
            }
        </div>
    );
};

export default Index
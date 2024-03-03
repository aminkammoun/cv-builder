import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';
import MediumGlobalDisplay from '../../../partials/MediumGlobalDisplay';

const Index: React.FC = () => {
    const { resumeData } = useResumeContext();

    return (
        <div >
            {
              resumeData.experience&& <MediumGlobalDisplay Bigtitle={'Experience'} data={resumeData.experience} />      
            }
        </div>
        
            
    );
};

export default Index
import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';
import MediumGlobalDisplay from '../../../partials/MediumGlobalDisplay';

const Index: React.FC = () => {
    const { resumeData } = useResumeContext();

    return (

        <div >
            {
                resumeData.education && <MediumGlobalDisplay Bigtitle={'Education'} data={resumeData.education} />
            }
        </div>



    );
};

export default Index
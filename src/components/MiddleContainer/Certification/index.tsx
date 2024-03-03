import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';
import MediumGlobalDisplay from '../../../partials/MediumGlobalDisplay';

const Index: React.FC = () => {
    const { resumeData } = useResumeContext();
    return (
        <div >
            {
                resumeData.certifications && <MediumGlobalDisplay Bigtitle={'Certification'} data={resumeData.certifications} />
            }
        </div>
    );
};

export default Index
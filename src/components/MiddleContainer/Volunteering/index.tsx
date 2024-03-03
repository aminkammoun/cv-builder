import React from 'react'
import { useResumeContext } from '../../../context/ResumeContext';
import MediumGlobalDisplay from '../../../partials/MediumGlobalDisplay';

const Index: React.FC = () => {
    const { resumeData } = useResumeContext();

    return (

        <div >
            {
                resumeData.volunteering && <MediumGlobalDisplay Bigtitle={'Volunteering'} data={resumeData.volunteering} />
            }
        </div>



    );
};

export default Index
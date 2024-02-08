import React, { useState } from 'react'
import Modal from '../../../utils/Modal'; 
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { useResumeContext } from '../../../context/ResumeContext';
import { Projects } from '../../../types/types';
import ProjectsForm from './ProjectsForm';
import ProjectsCard from './ProjectsCard';




const Index: React.FC = () => {
    const [onClose, setOnClose] = useState(false)
   const { updateProjectsData, resumeData } = useResumeContext();

    const handleAdd = (ff: string) => {
        console.log(ff);

        setOnClose(true);

    }
    const handleChange = (data: Projects) => {
        updateProjectsData(data);
        setOnClose(false);
    }
    return (
        <div className="mb-4 ">
            <div className='flex items-center'>

                <BuildingOfficeIcon className='w-6 h-6 mr-5' />
                <label htmlFor="Projects" className="block text-3xl font-bold ">
                    Projects
                </label>
            </div>
            <div>
               {
                resumeData&& <ProjectsCard data={resumeData.projects}/> 
               }
            </div>
            <AddHint label="Projects" onAddClick={() => handleAdd('Projects')} />

            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(false)}>
            {onClose && <ProjectsForm handleChange={handleChange} />}
            </Modal>


        </div>

    )
}

export default Index
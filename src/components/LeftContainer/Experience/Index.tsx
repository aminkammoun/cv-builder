import React, { useState } from 'react'
import Modal from '../../../utils/Modal';
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import ExperienceForm from './ExperienceForm';

import { useResumeContext } from '../../../context/ResumeContext';
import { Experience } from '../../../types/types';
import Card from '../../../partials/Card';


const Index: React.FC = () => {
   const [onClose, setOnClose] = useState(false)
   const { updateExperienceData, resumeData } = useResumeContext();

    /*const handleCheckSyntax = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server or process it further
        console.log('Form data submitted:', formData);
    };*/
    const handleAdd = (ff: string) => {
        console.log(ff);

        setOnClose(true);
        
    }
    const handleChange = (data: Experience) => {
        updateExperienceData(data);
        setOnClose(false);
        
    }
    return (
        <div className="mb-4 ">
            <div className='flex items-center'>

            <BriefcaseIcon className='w-6 h-6 mr-5'/> 
            <label htmlFor="experience" className="block text-3xl font-bold ">
                Experience
            </label>
            </div>
            <div>
                {
                    resumeData.experience && <Card data={resumeData.experience}/> 
                }
            </div>
            <AddHint label="experience" onAddClick={() => handleAdd('experience')} />
            
            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(false)}>
               <ExperienceForm handleChange={handleChange}/>
            </Modal>


        </div>

    )
}

export default Index
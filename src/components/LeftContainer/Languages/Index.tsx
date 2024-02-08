import React, { useState } from 'react'
import Modal from '../../../utils/Modal';
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { Language } from '../../../types/types';
import { useResumeContext } from '../../../context/ResumeContext';
import LanguageForm from './LanguageForm';
import LanguageCard from './LanguageCard';




const Index: React.FC = () => {
    const [onClose, setOnClose] = useState(false)
    const { updateLanguageData, resumeData } = useResumeContext();

    const handleChange = (data: Language) => {
        updateLanguageData(data);
        setOnClose(false);

    }
    const handleAdd = (ff: string) => {
        console.log(ff);

        setOnClose(true);

    }
    /*  const handleChange = (data: Experience) => {
         updateExperienceData(data);
         setOnClose(false);
 
     } */
    return (
        <div className="mb-4 ">
            <div className='flex items-center'>

                <LanguageIcon className='w-6 h-6 mr-5' />
                <label htmlFor="languages" className="block text-3xl font-bold ">
                    Languages
                </label>
            </div>
            <div>
                {
                    resumeData && <LanguageCard data={resumeData.languages} />
                }
            </div>
            <AddHint label="Languages" onAddClick={() => handleAdd('Languages')} />

            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(false)}>
                {onClose && <LanguageForm handleChange={handleChange} />}
            </Modal>


        </div>

    )
}

export default Index
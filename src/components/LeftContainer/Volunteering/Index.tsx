import React, { useState } from 'react'
import Modal from '../../../utils/Modal'; 
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { Volunteering } from '../../../types/types';
import VolunteeringForm from './VolunteeringForm';
import { useResumeContext } from '../../../context/ResumeContext';

import Card from '../../../partials/Card';




const Index: React.FC = () => {
    const [onClose, setOnClose] = useState(false)
   const { updateVolunteeringData, resumeData } = useResumeContext();
 
    const handleAdd = (ff: string) => {
        console.log(ff);

        setOnClose(true);

    }
  const handleChange = (data: Volunteering) => {
    updateVolunteeringData(data);
        setOnClose(false);

    } 
    return (
        <div className="mb-4 ">
            <div className='flex items-center'>

                <PuzzlePieceIcon className='w-6 h-6 mr-5' />
                <label htmlFor="Technologies" className="block text-3xl font-bold ">
                    <hr />
    Volunteering 
                </label>
            </div>
            <div>
               {
                resumeData&& <Card data={resumeData.volunteering} /> 
               }
            </div>
            <AddHint label="Technologies" onAddClick={() => handleAdd('Technologies')} />

            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(false)}>
            {onClose && <VolunteeringForm handleChange={handleChange} />}
            </Modal>


        </div>

    )
}

export default Index
import React, { useState } from 'react'
import Modal from '../../../utils/Modal'; 
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';




const Index: React.FC = () => {
    const [onClose, setOnClose] = useState(false)
   /* const { updateExperienceData, resumeData } = useResumeContext();
 */
    /*const handleCheckSyntax = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server or process it further
        console.log('Form data submitted:', formData);
    };*/
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

                <PuzzlePieceIcon className='w-6 h-6 mr-5' />
                <label htmlFor="Technologies" className="block text-3xl font-bold ">
                    Technologies
                </label>
            </div>
            <div>
               
            </div>
            <AddHint label="Technologies" onAddClick={() => handleAdd('Technologies')} />

            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(false)}>
                <h1>Technologies  Model</h1>
            </Modal>


        </div>

    )
}

export default Index
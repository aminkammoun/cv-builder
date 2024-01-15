import React, { useState } from 'react'
import Modal from '../../../utils/Modal';
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import { TrophyIcon } from '@heroicons/react/24/outline';


const Index: React.FC = () => {
    const [onClose, setOnClose] = useState(false)


    /*const handleCheckSyntax = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server or process it further
        console.log('Form data submitted:', formData);
    };*/
    const handleAdd = (ff: string) => {
        console.log(ff);

        setOnClose(true);

    }

    return (
        <div className="mb-4 ">
            <div className='flex items-center'>

                <TrophyIcon className='w-6 h-6 mr-5' />
                <label htmlFor="education" className="block text-3xl font-bold text-gray-700">
                    Certification
                </label>
            </div>
            <AddHint label="education" onAddClick={() => handleAdd('education')} />

            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(false)}>
                <h1>Certification  Model</h1>
            </Modal>


        </div>

    )
}

export default Index
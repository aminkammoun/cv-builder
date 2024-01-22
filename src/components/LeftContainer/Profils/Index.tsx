import React, { useState } from 'react'
import Modal from '../../../utils/Modal';
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import { ShareIcon } from '@heroicons/react/24/outline';
import ProfilForm from './ProfilForm';
import { useResumeContext } from '../../../context/ResumeContext';
import { Profil } from '../../../types/types';


const Index: React.FC = () => {
    const [onClose, setOnClose] = useState(false)
    const { updateProfilData} = useResumeContext();

    /*const handleCheckSyntax = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server or process it further
        console.log('Form data submitted:', formData);
    };*/
    const handleAdd = (ff: string) => {
        console.log(ff);

        setOnClose(true);

    }
    const handleChange = (data: Profil) => {
        updateProfilData(data);
        setOnClose(false);

    }

    return (
        <div className="mb-4 ">
            <div className='flex items-center'>

                <ShareIcon className='w-6 h-6 mr-5' />
                <label htmlFor="Profil" className="block text-3xl font-bold">
                Profil
                </label>
                
            </div>
            <AddHint label="Profil" onAddClick={() => handleAdd('Profil')} />

            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(false)}>
                <ProfilForm handleChange={handleChange}/>
            </Modal>


        </div>

    )
}

export default Index
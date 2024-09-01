import React, { useState } from 'react'
import Modal from '../../../utils/Modal';
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import { TrophyIcon } from '@heroicons/react/24/outline';
import CertificationForm from './CertificationForm';
import { Certification } from '../../../types/types';
import { useResumeContext } from '../../../context/ResumeContext';
import Card from '../../../partials/Card';
import validateModalInputs from '../../../global/globalFunctions';


const Index: React.FC = () => {
    const [onClose, setOnClose] = useState(false)
    const { updateCertificationData, resumeData } = useResumeContext();


    /*const handleCheckSyntax = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server or process it further
        console.log('Form data submitted:', formData);
    };*/
    const handleAdd = (ff: string) => {
        console.log(ff);

        setOnClose(true);

    }

    const handleChange = (data: Certification) => {
        console.log('Certification updated:', data.issuer);
        if(validateModalInputs(data.issuer, data.name)){

            updateCertificationData(data);
            setOnClose(false);
        }

    }
    return (
        <div className="mb-4 ">
            <div className='flex items-center'>

                <TrophyIcon className='w-6 h-6 mr-5' />
                <label htmlFor="education" className="block text-3xl font-bold">
                    Certification
                </label>
            </div>
            <div>
                {
                    resumeData.certifications && <Card data={resumeData.certifications} />
                }
            </div>
            <AddHint label="education" onAddClick={() => handleAdd('education')} />

            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(true)}>
                <CertificationForm handleChange={handleChange} />
            </Modal>


        </div>

    )
}

export default Index
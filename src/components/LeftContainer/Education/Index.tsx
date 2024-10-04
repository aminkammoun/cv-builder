import React, { useState } from 'react'
import Modal from '../../../utils/Modal';
//import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/16/solid';
import AddHint from '../../../partials/AddHint';
import EducationForm from './EducationForm';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { Education } from '../../../types/types';
import { useResumeContext } from '../../../context/ResumeContext';
// import Card from '../../../partials/Card';
import DraggableList from '../../../partials/DraggableList';
const Index: React.FC = () => {
    const [onClose, setOnClose] = useState(false)
    const { updateEducationData, updateEducationDataDrag, resumeData } = useResumeContext();

    const handleAdd = (ff: string) => {
        console.log(ff);

        setOnClose(true);

    }
    const handleChange = (data: Education) => {

        console.log('hani khdemet')
        updateEducationData(data);
        setOnClose(false);

    }
    const handlesOnDragEnd = (data: Education[]) => {
        console.log('ml data')
        console.log(data)
        resumeData.education.splice(0, resumeData.education.length, ...data)
        console.log(resumeData.education)
        updateEducationDataDrag(data)
    }
    return (
        <div className="mb-4 ">
            <div className='flex items-center'>

                <AcademicCapIcon className='w-6 h-6 mr-5' />
                <label htmlFor="education" className="block text-3xl font-bold ">
                    Education
                </label>
            </div>
            <div>
                {
                    resumeData.education && <div>
                        <DraggableList handlesOnDragEnd={handlesOnDragEnd} data={resumeData.education}></DraggableList>

                    </div>
                }

            </div>
            <AddHint label="education" onAddClick={() => handleAdd('education')} />

            <Modal id="modal" ariaLabel="modal-headline" show={onClose} handleClose={() => setOnClose(false)}>
                {onClose && <EducationForm handleChange={handleChange} />}
            </Modal>


        </div>

    )
}

export default Index
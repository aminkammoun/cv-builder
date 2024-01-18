// GenericModal.tsx
import React from 'react';
//import ExperienceForm from './ExperienceForm';
//import EducationForm from './EducationForm';

interface GenericModalProps {
  formType: 'experience' | 'education';
  isOpen: boolean;
  onClose: () => void;
}

const GenericModal: React.FC<GenericModalProps> = ({ formType, isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {/* Modal content based on formType */}
        {/*{formType === 'experience' && <ExperienceForm onClose={onClose} />}
        {formType === 'education' && <EducationForm onClose={onClose} />}*/}
      </div>
    </div>
  );
};

export default GenericModal;

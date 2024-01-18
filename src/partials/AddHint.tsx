// AddHint.tsx

import React from 'react';

interface AddHintProps {
  label: string;
  onAddClick: () => void;
}

const AddHint: React.FC<AddHintProps> = ({ label, onAddClick }) => {
  return (
    <div className='mt-4'>
      
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onAddClick();
        }}
        className="w-full  border border-slate-300 hover:border-slate-400  px-2 py-4 rounded-md hover:bg-gray-400 hover:text-black focus:outline-none focus:shadow-outline-green"
      >
        Add {label}
      </button>
    </div>
  );
};

export default AddHint;

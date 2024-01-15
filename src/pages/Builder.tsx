// HorizontalThreeSectionComponent.tsx

import React from 'react';
import ResumeFormSection from '../components/LeftContainer/ResumeFormSection';
import MiddleContainer from '../components/MiddleContainer/MiddleContainer';

const HorizontalThreeSectionComponent: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* First Section */}
      <section className="flex-1/5 p-4 max-w-md overflow-y-auto">
  
        <ResumeFormSection/>
      </section>

      {/* Second Section */}
      <section className="flex-1 p-4">
        
        <MiddleContainer />
      </section>

      {/* Third Section */}
      <section className="flex-1/5 p-8 max-w-md">
        <div className='max-w-1/1'>
        <h2 className="text-2xl font-bold mb-4">Section 3</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p></div>
      </section>
    </div>
  );
};

export default HorizontalThreeSectionComponent;

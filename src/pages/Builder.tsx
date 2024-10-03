// HorizontalThreeSectionComponent.tsx

import React from 'react';
import ResumeFormSection from '../components/LeftContainer/ResumeFormSection';
import MiddleContainer from '../components/MiddleContainer/MiddleContainer';
import { RightContainer } from '../components/RightContainer/RightContainer';

const HorizontalThreeSectionComponent: React.FC = () => { 
  return (
    <div className="flex h-screen bg-bg-300 ">
      {/* First Section */}
      <section className="flex-1/5 p-4 max-w-md overflow-y-auto">
       
        <ResumeFormSection />
      </section>

      {/* Second Section */}
      <section className="flex-1">

        <MiddleContainer />
      </section>

      {/* Third Section */}
      <section className="flex-1/5 w-full max-w-md overflow-y-auto">
        <RightContainer />
      </section>
    </div>
  );
};

export default HorizontalThreeSectionComponent;

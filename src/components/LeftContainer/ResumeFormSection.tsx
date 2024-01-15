// ResumeFormSection.tsx

import React from 'react';
import Basics from './Basics/Index';
import Education from './Education/Index';
import Experience from './Experience/Index';
import Certifications from "./Certifications/Index";
const ResumeFormSection: React.FC = () => {
  
 
  return (
    <div className="w-full max-w-lg ">

    <Basics />
    <hr />
    <Experience/> 
    <hr />
    <Education/>
    <hr />
    <Certifications/>
        
    </div>
  );
};

export default ResumeFormSection;

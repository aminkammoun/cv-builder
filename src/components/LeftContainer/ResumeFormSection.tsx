// ResumeFormSection.tsx

import React from 'react';
import Basics from './Basics/Index';
import Education from './Education/Index';
import Experience from './Experience/Index';
import Certifications from "./Certifications/Index";
import Languages from "./Languages/Index";
import Profils from "./Profils/Index";
import Volunteering from "./Volunteering/Index";
import Projects from "./Projects/Index";
const ResumeFormSection: React.FC = () => {
  
 
  return (
    <div className="w-full max-w-lg text-white">

    <Basics />
    <hr />
    <Profils />
    
    <hr />
    <Education/>
    <hr />
    <Experience/> 
    <hr />
    <Projects /> 
    <hr />
    <Certifications/>
    <hr />
    <Languages />
    <hr />
    <Volunteering />    
    </div>
  );
};

export default ResumeFormSection;

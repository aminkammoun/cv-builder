// ResumeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Education, Experience, ResumeData } from '../types/types';



interface ResumeContextProps {
 
  resumeData: ResumeData;
  
  updateResumeData: (newData: Partial<ResumeData>) => void;
  updateEducationData: (newData: Education) => void;
  updateExperienceData: (newData: Experience) => void;
}

const ResumeContext = createContext<ResumeContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};

interface ResumeProviderProps {
  children: ReactNode;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  
  const [resumeData, setResumeData] = useState<ResumeData>({
    basics: {
      firstName: '',
      lastName: '',
      phone: '',
      website: '',
      email: '',
      location: '',
      headline: ''
    },
    education: [],
    experience: [],
    skills: [],
  }
  );
  
  const updateResumeData = (newData: ResumeData) => {

    setResumeData(newData);
  };
  const updateEducationData = (newData:Education) => {
    setResumeData((prevData) => ({
   ...prevData,
      education: [...prevData.education, newData],
    }));
  }
  const updateExperienceData = (newData:Experience) => {
    setResumeData((prevData) => ({

     ...prevData,
        experience: [...prevData.experience, newData],
    }))
  }
  return (
    <ResumeContext.Provider value={{  resumeData, updateResumeData, updateEducationData,updateExperienceData }}>
      {children}
    </ResumeContext.Provider>
  );
};

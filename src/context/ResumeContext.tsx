// ResumeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Education, Experience, ResumeData, Certification, Profil, Language, Volunteering, Projects } from '../types/types';



interface ResumeContextProps {

  resumeData: ResumeData;

  updateResumeData: (newData: Partial<ResumeData>) => void;
  updateEducationData: (newData: Education) => void;
  updateEducationDataDrag: (newData: Education[]) => void;
  updateExperienceData: (newData: Experience) => void;
  updateCertificationData: (newData: Certification) => void;
  updateProfilData: (newData: Profil) => void;
  updateLanguageData: (newData: Language) => void;
  updateVolunteeringData: (newData: Volunteering) => void;
  updateProjectsData: (newData: Projects) => void;

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
    profil: [],
    education: [],
    experience: [],
    skills: [],
    languages: [],
    certifications: [],
    volunteering: [],
    projects: [],
  }
  );

  const updateResumeData = (newData: ResumeData) => {

    setResumeData(newData);
  };
  const updateEducationData = (newData: Education) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: [...prevData.education, newData],
    }));
  }
  const updateEducationDataDrag = (newData: Education[]) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.splice(0, prevData.education.length, ...newData),
    }));
  }

  const updateExperienceData = (newData: Experience) => {
    setResumeData((prevData) => ({

      ...prevData,
      experience: [...prevData.experience, newData],
    }))
  }

  const updateCertificationData = (newData: Certification) => {
    setResumeData((prevData) => ({

      ...prevData,
      certifications: [...prevData.certifications, newData],
    }))
  }
  const updateProfilData = (newData: Profil) => {
    setResumeData((prevData) => ({
      ...prevData,
      profil: [...prevData.profil, newData],
    }));
  }
  const updateLanguageData = (newData: Language) => {
    setResumeData((prevData) => ({
      ...prevData,
      languages: [...prevData.languages, newData],
    }));
  }
  const updateVolunteeringData = (newData: Volunteering) => {
    setResumeData((prevData) => ({
      ...prevData,
      volunteering: [...prevData.volunteering, newData],
    }));
  }
  const updateProjectsData = (newData: Projects) => {
    setResumeData((prevData) => ({
      ...prevData,
      projects: [...prevData.projects, newData],
    }));
  }
  return (
    <ResumeContext.Provider value={{ resumeData, updateResumeData, updateEducationData, updateEducationDataDrag, updateExperienceData, updateCertificationData, updateProfilData, updateLanguageData, updateVolunteeringData, updateProjectsData }}>
      {children}
    </ResumeContext.Provider>
  );
};

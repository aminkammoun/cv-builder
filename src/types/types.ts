export interface ResumeData {
    basics?: {
      firstName: string;
      lastName:string;
      phone: string;
      website: string;
      email: string;
      location: string;
      headline: string;
    };
    education?: Education[];
    experience?: Experience[];
    skills?: Skill[];
  }
  
  export interface Education {
    institution: string;
    degree: string;
    endDate: string;
    startDate: string;
    summary: string;
  }
  
  export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate?: string; // Optional if still working
    summary: string;
  }
  
  export interface Skill {
    name: string;
    proficiency: string; // You can use enums or specific values here
  }
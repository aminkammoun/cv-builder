export interface ResumeData {
  basics?: {
    firstName: string;
    lastName: string;
    phone: string;
    website: string;
    email: string;
    location: string;
    headline: string;
  };
  education?: Education[];
  experience?: Experience[];
  skills?: Skill[];
  profil?: Profil[];
  languages?: Language[];
  certifications?: Certification[];
  volunteering?: Volunteering[];
  projects?: Projects[];
}

export interface Education {
  institution: string;
  location: string,
  degree: string;
  rangeDate: string;
  summary: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string,
  rangeDate: string;
  summary: string;
}

export interface Skill {
  name: string;
  proficiency: string; // You can use enums or specific values here
}
export interface Profil {
  username: string;
  networks: string;
  website: string;
  Icon: string;
}
export interface Language{
  name: string;
  level: string;

}
export interface Certification{
  name: string;
  issuer: string;
  rangeDate: string;
  website: string;
  summary: string;
}
export interface Volunteering{
  Organization: string;
  position: string;
  date: string;
  location: string;
  summary: string;
}
export interface Projects{
  name: string;
  Description: string;
  rangeDate: string;
  location: string;
  summary: string;
}

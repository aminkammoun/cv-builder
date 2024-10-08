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
  Style?: Style[];
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
export interface Language {
  name: string;
  level: string;

}
export interface Certification {
  name: string;
  issuer: string;
  rangeDate?: string;
  website?: string;
  summary?: string;
}
export interface Volunteering {
  Organization: string;
  position: string;
  date: string;
  location: string;
  summary: string;
}
export interface Projects {
  name: string;
  Description: string;
  rangeDate: string;
  location: string;
  summary: string;
}
export interface Style {
  padding: number;
  color: string;
}
export interface User {
  access_token: string;
}

export interface ProfileAuth {
  id: string;
  name: string;
  email: string;
  picture: string;
  // Add other profile fields as needed
}
export interface AvatarProps {
  givenName: string;
  familyName: string;  // Optional image URL
  size?: string; // Size of the avatar, e.g., 'w-12 h-12'
}
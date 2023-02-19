import Certification from './Certification';
import Course from './Course';

type Degree = {
  level: string;
  country: string;
  university: string;
  fields: [string];
  start: number;
  end: number;
  grade: string;
  studySubject: string;
  additionalInfo?: string;
};

type HighSchool = {
  name: string;
  country: string;
  certificateName: string;
  languageStudy: string;
  graduationYear: number;
  grade: string;
  additionalInfo?: string;
};

type Education = {
  level: string;
  degrees: [Degree];
  highSchool: HighSchool;
  certifications: [Certification];
  courses: [Course];
};

export default Education;

import Salary from './Salary';

type DateType = {
  start: Date;
  end: Date;
  still: Boolean;
};

type Company = {
  name: string;
  size: string;
  industry: [string];
  website: string;
};

enum ExperienceTypes {
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  advanced = 'Advanced',
  expert = 'Expert',
}

interface Experience {
  type: ExperienceTypes;
  title: string;
  description: string;
  category: [string];
  summary: string;
  company: Company;
  HRGmail: string;
  date: DateType;
  careerLevel: string;
  country: string;
  city: string;
  achievements: string;
  salary: Salary;
}

export default Experience;

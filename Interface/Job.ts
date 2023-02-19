import Resume from '../Types/Resume';
import Salary from '../Types/Salary';
import Admin from './Client';
import Client from './Worker';

type Details = {
  experience: string;
  careerLevel: string;
  educationLevel: string;
  salary?: Salary | 'Confidential';
  categories: [string];
  skills: [string];
};

interface Job {
  title: string;
  description: string;
  details: Details;
  requirements: string;
  inAddition?: string;
  type: string;
  company: Client | Admin;
  resumes?: [Resume];
  viewed?: [Resume];
  refused?: [Resume];
  inConsideration?: [Resume];
  saves?: [Client | Admin];
  shares?: [Client | Admin];
}

export default Job;

import Language from '../Types/Language';
import Blog from './Blog';
import Experience from '../Types/Experience';
import Job from './Job';
import Message from '../Types/Message';
import Post from './Post';
import Product from './Product';
import Review from '../Types/Review';
import OnlinePresence from '../Types/OnlinePresence';
import Reactions from '../Types/Reactions';

type Location = {
  continent: string;
  country: string;
  city: string;
  address: string;
  postCode: number;
  relocate: boolean;
};

type Contact = {
  phone: number;
  mobile: number;
  alternativeMobile: number;
};

type JobInfo = {
  title: string;
  fields: [string];
};

type JobsStatus = {
  applied?: [Job];
  approved?: [Job];
  refused?: [Job];
  posted?: [Job];
};

type worksExamples = {
  images: [string];
  videos: [string];
};

enum UserType {
  Freelancer = 'Freelancer',
  Client = 'Client',
}

interface User {
  fullName: string;
  email: string;
  password: string;
  rate: number | 0;
  avatar?: string;
  bio: string;
  coverImg?: string;
  nationality: string;
  age: number;
  gender: string;
  website?: string;
  active: boolean;
  token: string;
  worksExamples: worksExamples;
  achievements: [string];
  following?: [User];
  followers?: [User];
  job?: JobInfo;
  location: Location;
  contact: Contact;
  blogs?: [Blog];
  products?: [Product];
  jobsStatus?: JobsStatus;
  messages?: [Message];
  posts?: [Post];
  onlinePresence?: OnlinePresence;
  experience?: [Experience];
  reviews?: [Review];
  reactions?: [Reactions];
  languages: [Language];
  type: UserType;
}

export default User;

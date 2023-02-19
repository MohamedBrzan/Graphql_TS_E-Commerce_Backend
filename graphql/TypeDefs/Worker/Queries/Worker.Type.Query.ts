const workersTypeQuery = `#graphql

type Location {
  continent: String
  country: String
  city: String
  address: String
  postCode: Int
  relocate: Boolean
}

type Contact  {
  phone: Int
  mobile: Int
  alternativeMobile: Int
}

type JobInfo  {
  title: String
  fields: [String]
}

type Jobs {
  applied: [Job]
  approved: [Job]
  refused: [Job]
  posted: [Job]
}

type User {
  fullName: String
  email: String
  password: String
  rate: Int 
  avatar: String
  bio: String
  coverImg: String
  nationality: String
  age: Int
  gender: String
  website: String
  license: Boolean
  active: Boolean
  workExample: [String]
  achievements: [String]
  following: [User]
  followers: [User]
  job: JobInfo
  location: Location
  contact: Contact
  blogs: [Blog]
  products: [Product]
  jobs: Jobs
  messages: [Message]
  posts: [Post]
  onlinePresence: OnlinePresence
  experience: [Experience]
  reviews: [Review]
  reactions: [Reactions]
  languages: [Language]
}

type dateType {
  start: String
  end: String
  still: Boolean
}

type Company  {
  name: String
  size: String
  industry: [String]
  website: String
}

type Course {
  topic: String
  organizationName: String
  month: String
  year: Int
  additionalInfo: String
}

type Degree {
  level: String
  country: String
  university: String
  fields: [String]
  start: Int
  end: Int
  grade: String
  studySubject: String
  additionalInfo: String
}

type HighSchool {
  name: String
  country: String
  certificateName: String
  languageStudy: String
  graduationYear: Int
  grade: String
  additionalInfo: String
}

type Education {
  level: String
  degrees: [Degree]
  highSchool: HighSchool
  certifications: [Certification]
  courses: [Course]
}

type Language {
  name: String
  reading: Int
  writing: Int
  listening: Int
  speaking: Int
  justification: String
}

type Message  {
  userId: String
  text: String
}

type OnlinePresence  {
  linkedin: String
  facebook: String
  twitter: String
  behance: String
  instagram: String
  github: String
  stackOverflow: String
  youtube: String
  blog: String
  gmail: String
  website: String
  other: String
}

type Resume {
  file: String
  photo: String
}

type ReviewContent {
  text: String
  value: Int
}

type Review  {
  userId: String
  review: ReviewContent
}

type Salary {
  from: Int
  to: Int
  currency: String
  period: String
  other: String
  hide: Boolean
}

type Skill {
  name: String
  yearsOfExperience: String
  proficiency: Int
  interest: Int
  justification: String
}

type Experience {
  type: String
  title: String
  description: String
  category: [String]
  summary: String
  company: Company
  HRGmail: String
  date: dateType
  careerLevel: String
  country: String
  city: String
  achievements: String
  salary: Salary
}

type Contact{
  phone: Int
  mobile: Int
  alternativeMobile: Int
}

type JobInfo {
  title: String
  fields: [String]
}

type Details  {
  experience: String
  careerLevel: String
  educationLevel: String
  salary: Salary
  categories: [String]
  skills: [String]
}

type Job {
  title: String
  description: String
  details: Details
  requirements: String
  inAddition: String
  type: String
  company: Worker
  resumes: [Resume]
  viewed: [Resume]
  refused: [Resume]
  inConsideration: [Resume]
  saves: [Worker]
  shares: [Worker]
}

type Jobs {
  applied: [Job]
  approved: [Job]
  refused: [Job]
  posted: [Job]
}

type Reacted {
  posts: [Post]
  blogs: [Blog]
}

enum MaterialStatus {
  Unspecified,
  Single,
  Married,
}

enum MilitaryStatus {
  NotApplicable,
  Exempted,
  Completed,
  PostPoned,
}

enum Status {
  Available,
  NotAvailable,
  ComingSoon,
}

type Package  {
  count: Int
  price: Int
  piece: Int
}

type Reaction {
  like: [User]
  support: [User]
  insight: [User]
  laugh: [User]
  sad: [User]
  happy: [User]
  love: [User]
  celebrate: [User]
}

type Actions  {
  posts: [Post]
  blogs: [Blog]
}

type Share  {
  users: [User]
}

type Save  {
  users: [User]
}

type Comment  {
  owner: String
  comment: String
  replay: [Comment]
  reactions: [Reaction]
}

type Reactions  {
  actions: [Actions]
  reactions: [Reaction]
  shares: [Share]
  saves: [Save]
  comments: [Comment]
  products: [Product]
}

type Product {
  owner: User
  title: String
  description: String
  details: String
  highLights: String
  brand: String
  packagesString: [Package]
  price: Int
  newPrice: Int
  currency: String
  quantity: Int
  notice: String
  status: Status
  sales: [User]
  colors: [String]
  tags: [String]
  type: String
  document: String
  information: String
  reviews: [Review]
  images: [String]
  reactions: [Reactions]
}

type Post {
  title: String
  description: String
}

type Blog {
  title: String
  description: String
}

type Certification {
  name: String
  date: String
  score: Int
  link: String
  id: Int
  additionalInfo: String
}

type Language {
  name: String
  reading: Int
  writing: Int
  listening: Int
  speaking: Int
  justification: String
}

type Worker {
  avatar: String
  fullName: String
  email: String
  password: String
  rate: Int
  bio: String
  userType: String
  coverImg: String
  nationality: String
  age: Int
  gender: String
  license: Boolean
  workExample: [String]
  achievements: [String]
  following: [Worker]
  followers: [Worker]
  job: JobInfo
  location: Location
  contact: Contact
  blogs: [Blog]
  products: [Product]
  jobs: Jobs
  messages: [Message]
  posts: [Post]
  onlinePresence: OnlinePresence
  experience: [Experience]
  reactions: [Reactions]
  languages: [Language]
  skills: [Skill]
  education: Education
  materialStatus: MaterialStatus
  militaryStatus: MilitaryStatus
  learningInterest: [String]
  yearsOfExperience: String
  resume: Resume
  reviews: [Review]
  freelancer: Boolean
  active: Boolean
}




################################
### Unions Types ###
################################

### Error ###

type FetchFailed {
  message: String
}

### Error ###

type FetchWorkerFailed {
  message: String
}

################################
### Workers Fetch Types ###
################################

###Success ###

type FetchWorkersSuccess {
  workers: [Worker!]!
}

################################
### Worker Fetch Types ###
################################

###Success ###

type FetchWorkerSuccess {
  worker: Worker!
}

################################
### Unions ###
################################

### Workers ###
union WorkersResult = FetchWorkersSuccess | FetchFailed

### Worker ###
union WorkerResult = FetchWorkerSuccess | FetchWorkerFailed

type Query {

  getWorkers: WorkersResult!

  getWorkerById(id: ID!): WorkerResult!
}

`;
export { workersTypeQuery };

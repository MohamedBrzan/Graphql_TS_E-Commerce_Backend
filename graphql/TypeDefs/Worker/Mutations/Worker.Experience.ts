const workerExperienceType = `#graphql

enum ExperienceTypes {
  Beginner
  Intermediate
  Advanced
  Expert
}

type Salary {
  from: Int!
  to: Int!
  currency: String!
  period: String!
  other: String!
  hide: Boolean!
}

type Company {
  name: String!
  size: String!
  industry: [String!]!
  website: String!
}

type DateType {
  start: String!
  end: String!
  still: Boolean!
}

type Experience {
  experienceType: ExperienceTypes!
  title: String! 
  description: String! 
  category: [String!]!
  summary: String! 
  company: Company!
  HRGmail: String! 
  experienceDate: DateType!
  careerLevel: String! 
  country: String! 
  city: String! 
  achievements: String! 
  salary: Salary! 
}


################################
### Inputs ###
################################

input SalaryInput {
  from: Int!
  to: Int!
  currency: String!
  period: String!
  other: String!
  hide: Boolean!
}

input CompanyInput {
  name: String!
  size: String!
  industry: [String!]!
  website: String!
}

input DateTypeInput {
  start: String!
  end: String!
  still: Boolean!
}

### Create ###

input CreateWorkerExperience {
  id: ID!
  experienceType: ExperienceTypes!
  title: String! 
  description: String! 
  category: [String!]!
  summary: String! 
  company: CompanyInput!
  HRGmail: String! 
  experienceDate: DateTypeInput!
  careerLevel: String! 
  country: String! 
  city: String! 
  achievements: String! 
  salary: SalaryInput! 
}

# ### Update ###

input UpdateWorkerExperience {
  id: ID!
  experienceId: ID!
  experienceType: ExperienceTypes!
  title: String! 
  description: String! 
  category: [String!]!
  summary: String! 
  company: CompanyInput!
  HRGmail: String! 
  experienceDate: DateTypeInput!
  careerLevel: String! 
  country: String! 
  city: String! 
  achievements: String! 
  salary: SalaryInput! 
}

### Delete ###

input DeleteWorkerExperience {
  id: ID!
  experienceId: ID!
}

################################
### Unions ###
################################

### Create ###

type CreateWorkerExperienceFailed {
  message: String!
}

type CreateWorkerExperienceSuccess {
  experience: Experience!
}

union CreateWorkerExperienceResult = CreateWorkerExperienceSuccess | CreateWorkerExperienceFailed

# ### Update ###

type UpdateWorkerExperienceFailed {
  message: String!
}

type UpdateWorkerExperienceSuccess {
  experience: Experience!
}

union UpdateWorkerExperienceResult = UpdateWorkerExperienceSuccess | UpdateWorkerExperienceFailed


### Delete ###

type DeleteWorkerExperienceFailed {
  message: String!
}

type DeleteWorkerExperienceSuccess {
  deletedMsg: String!
}

union DeleteWorkerExperienceResult = DeleteWorkerExperienceSuccess | DeleteWorkerExperienceFailed


type Mutation {

  createWorkerExperience(input: CreateWorkerExperience!): CreateWorkerExperienceResult!

  updateWorkerExperience(input: UpdateWorkerExperience!): UpdateWorkerExperienceResult!

  deleteWorkerExperience(input: DeleteWorkerExperience!): DeleteWorkerExperienceResult!
}
`;
export { workerExperienceType };

const workerHighSchoolType = `#graphql


input WorkerHighSchool { 
  id:ID!
  name: String!
  country: String!
  certificateName: String!
  languageStudy: String!
  graduationYear: Int!
  grade: String!
  additionalInfo: String!
}

input DeleteHighSchool { 
  id:ID!
}

################################
### Unions ###
################################

### HighSchool ###

type DeleteFailed {
  message: String!
}

type DeleteHighSchoolSuccess {
  deletedMsg: String!
}

union HighSchoolResult = DeleteHighSchoolSuccess | DeleteFailed

type Mutation {
  updateWorkerHighSchool(input: WorkerHighSchool): HighSchool!
  
  deleteWorkerHighSchool(input: DeleteHighSchool): HighSchoolResult!
}
`;
export { workerHighSchoolType };

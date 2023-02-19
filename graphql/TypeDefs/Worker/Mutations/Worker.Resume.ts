const workerResumeType = `#graphql

type Resume {  
  file: String!
  photo: String!
}

input WorkerResume {  
  id:ID!
  file: String!
  photo: String!
}

################################
### Unions ###
################################

### Resume ###

type DeleteFailed {
  message: String!
}

type DeleteResumeSuccess {
  deletedMsg: String!
}

union DeleteResumeResult = DeleteResumeSuccess | DeleteFailed


type Mutation {
  updateWorkerResume(input: WorkerResume): Resume!

  deleteWorkerResume(id: ID!): DeleteResumeResult!
}
`;
export { workerResumeType };

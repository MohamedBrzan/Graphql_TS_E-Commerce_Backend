const workerJobType = `#graphql

type Job {
  title: String!
  fields: [String]!
}

input UpdateJob {
  id: ID!
  title: String!
  fields: [String]!
}

input DeleteField {
  id: ID!
  fieldIndex: Int!
}

################################
### Unions ###
################################

### Update ###

type UpdateFailed {
  message: String!
}

type UpdateSuccess {
  job: Job!
}

union UpdateJobResult = UpdateSuccess | UpdateFailed

### Delete ###

type DeleteFailed {
  message: String!
}

type DeleteSuccess {
  deletedMsg: String!
}

union DeleteJobResult = DeleteSuccess | DeleteFailed

type Mutation {

  updateWorkerJob(input: UpdateJob!): UpdateJobResult!

  deleteWorkerJobField(input: DeleteField!): DeleteJobResult!
}
`;

export { workerJobType };

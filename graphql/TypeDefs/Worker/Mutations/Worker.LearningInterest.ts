const workerLearningInterestType = `#graphql

type LearningInterest {
  learningInterest: [String!]!
}

input UpdateLearningInterest{
  id: ID!
  learningInterest: [String!]!
}

input DeleteLearningInterest {
  id: ID!
  index: Int!
}

################################
### Unions ###
################################

### Update ###

type UpdateLearningInterestFailed {
  message: String!
}

type UpdateLearningInterestSuccess {
  learningInterest: [String!]!
}

union UpdateLearningInterestResult = UpdateLearningInterestSuccess | UpdateLearningInterestFailed

### Delete ###

type DeleteLearningInterestFailed {
  message: String!
}

type DeleteLearningInterestSuccess {
  deletedMsg: String!
}

union DeleteLearningInterestResult = DeleteLearningInterestSuccess | DeleteLearningInterestFailed

type Mutation {
  updateWorkerLearningInterest(input: UpdateLearningInterest): UpdateLearningInterestResult!

  deleteWorkerLearningInterest(input: DeleteLearningInterest): DeleteLearningInterestResult!
}
`;
export { workerLearningInterestType };

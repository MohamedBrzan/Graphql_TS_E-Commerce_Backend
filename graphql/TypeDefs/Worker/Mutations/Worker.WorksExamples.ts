const workerWorksExamplesType = `#graphql

type WorksExamples {
  images: [String!]!
  videos: [String!]!
}

################################
### Inputs ###
################################

### Create ###

input CreateWorksExamples {
  id: ID!
  images: [String]
  videos: [String]
}

# ### Update ###

# input UpdateWorksExamples {
#   id: ID!
#   imageIndex: Int
#   videoIndex: Int
#   image: String
#   video:String
# }

### Delete ###

input DeleteWorksExamples {
  id: ID!
  imageIndex: Int
  videoIndex: Int
}

################################
### Unions ###
################################

### Create ###

type CreateFailed {
  message: String!
}

type CreateSuccess {
  worksExamples: WorksExamples!
}

union CreateWorksExamplesResult = CreateSuccess | CreateFailed

# ### Update ###

# type UpdateFailed {
#   message: String!
# }

# type UpdateSuccess {
#   worksExamples: WorksExamples!
# }

# union UpdateWorksExamplesResult = UpdateSuccess | UpdateFailed


### Delete ###

type DeleteFailed {
  message: String!
}

type DeleteSuccess {
  deletedMsg: String!
}

union DeleteWorksExamplesResult = DeleteSuccess | DeleteFailed


type Mutation {

  createWorkerWorksExamples(input: CreateWorksExamples!): CreateWorksExamplesResult!

  # updateWorkerWorksExamples(input: UpdateWorksExamples!): UpdateWorksExamplesResult!

  deleteWorkerWorksExamples(input: DeleteWorksExamples!): DeleteWorksExamplesResult!
}
`;
export { workerWorksExamplesType };

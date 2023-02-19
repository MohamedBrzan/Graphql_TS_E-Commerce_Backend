const workerFollowType = `#graphql

type Follow {
  following: String!,
  follower: String!,
}


################################
### Inputs ###
################################

### Create ###

input CreateWorkerFollow {
  following: ID!,
  follower: ID!,
}

### Delete ###

input DeleteWorkerFollow {
  following: ID!,
  follower: ID!,
}

################################
### Unions ###
################################

### Create ###

type CreateWorkerFollowFailed {
  message: String!
}

type CreateWorkerFollowSuccess {
  followed: String!
}

union CreateWorkerFollowResult = CreateWorkerFollowSuccess | CreateWorkerFollowFailed

### Delete ###

type DeleteWorkerFollowFailed {
  message: String!
}

type DeleteWorkerFollowSuccess {
  deletedMsg: String!
}

union DeleteWorkerFollowResult = DeleteWorkerFollowSuccess | DeleteWorkerFollowFailed


type Mutation {

  createWorkerFollow(input: CreateWorkerFollow!): CreateWorkerFollowResult!

  deleteWorkerFollow(input: DeleteWorkerFollow!): DeleteWorkerFollowResult!
}
`;
export { workerFollowType };

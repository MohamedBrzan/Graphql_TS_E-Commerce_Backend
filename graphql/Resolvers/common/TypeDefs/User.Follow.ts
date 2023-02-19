const userFollowType = `#graphql

type Follow {
  following: String!
  follower: String!
}


################################
### Inputs ###
################################

### Create ###

input CreateUserFollow {
  following: ID!
  follower: ID!
  userType: UserType!
}

### Delete ###

input DeleteUserFollow {
  following: ID!
  follower: ID!
  userType: UserType!
}

################################
### Unions ###
################################

### Create ###

type CreateUserFollowFailed {
  message: String!
}

type CreateUserFollowSuccess {
  followed: String!
}

union CreateUserFollowResult = CreateUserFollowSuccess | CreateUserFollowFailed

### Delete ###

type DeleteUserFollowFailed {
  message: String!
}

type DeleteUserFollowSuccess {
  deletedMsg: String!
}

union DeleteUserFollowResult = DeleteUserFollowSuccess | DeleteUserFollowFailed


type Mutation {

  createUserFollow(input: CreateUserFollow!): CreateUserFollowResult!

  deleteUserFollow(input: DeleteUserFollow!): DeleteUserFollowResult!
}
`;
export { userFollowType };

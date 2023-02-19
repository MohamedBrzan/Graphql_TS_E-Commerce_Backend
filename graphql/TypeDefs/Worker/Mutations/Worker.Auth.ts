const userAuthenticationType = `#graphql

enum UserType {
  Freelancer,
  Client
}

input RegisterInput {
  userType: UserType!
  fullName: String!
  avatar: String!
  email: String!
  password: String!
}

input LoginInput {
  email: String!
  password: String!
}



################################
### Unions ###
################################

### Authentication ###

type Failed {
  message: String!
}

type AuthenticationSuccess {
  user: User!
}

union AuthenticationResult = AuthenticationSuccess | Failed

type Mutation {
  register(input: RegisterInput): AuthenticationResult!

  login(input: LoginInput): AuthenticationResult!
}
`;
export { userAuthenticationType };

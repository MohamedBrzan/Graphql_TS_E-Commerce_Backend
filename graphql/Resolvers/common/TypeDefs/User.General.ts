const userGeneralType = `#graphql

input UserGeneral {
  userType: String!
  id:ID!
  fullName: String
  avatar: String
  bio: String
  coverImg: String
  nationality: String
  age: Int
  gender: String
  materialStatus: MaterialStatus
  militaryStatus: MilitaryStatus
}

type Mutation {
  createUserGeneral(input: UserGeneral): User!

  updateUserGeneral(input: UserGeneral): User!
}
`;
export { userGeneralType };

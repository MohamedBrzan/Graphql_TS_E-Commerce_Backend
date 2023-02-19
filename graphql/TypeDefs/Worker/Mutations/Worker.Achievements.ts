const workerAchievementsType = `#graphql


type Achievements {
  achievements: String!
}

input UpdateAchievements {
  id: ID!
  achievements: String!
}


################################
### Unions ###
################################

### Achievements ###

type UpdateFailed {
  message: String!
}

type UpdateAchievementsSuccess {
  achievements: Achievements!
}

union AchievementsResult = UpdateAchievementsSuccess | UpdateFailed


type Mutation {

  updateWorkerAchievements(input: UpdateAchievements!): AchievementsResult!
}
`;
export { workerAchievementsType };

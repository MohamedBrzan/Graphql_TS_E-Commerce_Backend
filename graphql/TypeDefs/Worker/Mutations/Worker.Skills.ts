const workerSkillType = `#graphql

type Skill {
  name: String!,
  yearsOfExperience: String!,
  proficiency: Int!,
  interest: Int!,
  justification: String!,
}


################################
### Inputs ###
################################

### Create ###

input CreateWorkerSkill {
  id: ID!
  name: String!,
  yearsOfExperience: String!,
  proficiency: Int!,
  interest: Int!,
  justification: String!,
}

# ### Update ###

input UpdateWorkerSkill {
  id: ID!
  skillId: ID!
  name: String!,
  yearsOfExperience: String!,
  proficiency: Int!,
  interest: Int!,
  justification: String!,
}

### Delete ###

input DeleteWorkerSkill {
  id: ID!
  skillId: ID!
}

################################
### Unions ###
################################

### Create ###

type CreateWorkerSkillFailed {
  message: String!
}

type CreateWorkerSkillSuccess {
  skill: Skill!
}

union CreateWorkerSkillResult = CreateWorkerSkillSuccess | CreateWorkerSkillFailed

# ### Update ###

type UpdateWorkerSkillFailed {
  message: String!
}

type UpdateWorkerSkillSuccess {
  skill: Skill!
}

union UpdateWorkerSkillResult = UpdateWorkerSkillSuccess | UpdateWorkerSkillFailed


### Delete ###

type DeleteWorkerSkillFailed {
  message: String!
}

type DeleteWorkerSkillSuccess {
  deletedMsg: String!
}

union DeleteWorkerSkillResult = DeleteWorkerSkillSuccess | DeleteWorkerSkillFailed


type Mutation {

  createWorkerSkill(input: CreateWorkerSkill!): CreateWorkerSkillResult!

  updateWorkerSkill(input: UpdateWorkerSkill!): UpdateWorkerSkillResult!

  deleteWorkerSkill(input: DeleteWorkerSkill!): DeleteWorkerSkillResult!
}
`;
export { workerSkillType };

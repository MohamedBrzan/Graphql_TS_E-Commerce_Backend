const workerCertificationsType = `#graphql


type Certifications {
  name: String!
  date: String!
  score: Int!
  link: String!
  additionalInfo: String!
}


input CreateCertifications { 
  id:ID!
  name: String!
  date: String!
  score: Int!
  link: String!
  additionalInfo: String!
}

input UpdateCertification { 
  id:ID!
  certificationId: ID!
  name: String!
  date: String!
  score: Int!
  link: String!
  additionalInfo: String!
}

input DeleteCertification { 
  id:ID!
  certificationId: ID!
}

################################
### Unions ###
################################

### Certifications ###

type DeleteFailed {
  message: String!
}

type DeleteCertificationsSuccess {
  deletedMsg: String!
}

union CertificationsResult = DeleteCertificationsSuccess | DeleteFailed

type UpdateFailed {
  message: String!
}

type UpdateCertificationSuccess {
  certification: Certifications!
}

union CertificationUpdateResult = UpdateCertificationSuccess | UpdateFailed

type Mutation {
  createWorkerCertifications(input: CreateCertifications): Certifications!

  updateWorkerCertifications(input: UpdateCertification): CertificationUpdateResult!
  
  deleteWorkerCertifications(input: DeleteCertification): CertificationsResult!
}
`;
export { workerCertificationsType };

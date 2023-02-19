const workerDegreesType = `#graphql


input WorkerDegree { 
  id:ID!
  degreeId: String
  level: String
  country: String
  university: String
  fields: [String]
  start: Int
  end: Int
  grade: String
  studySubject: String
  additionalInfo: String
}

input DeleteDegree { 
  id:ID!
  degreeId: String
}

################################
### Unions ###
################################

### Degree ###

type DeleteFailed {
  message: String!
}

type DeleteDegreeSuccess {
  deletedMsg: String!
}

union DegreeResult = DeleteDegreeSuccess | DeleteFailed

type Mutation {
  createWorkerDegree(input: WorkerDegree): Degree!

  updateWorkerDegree(input: WorkerDegree): Degree!
  
  deleteWorkerDegree(input: DeleteDegree): DegreeResult!
}
`;
export { workerDegreesType };

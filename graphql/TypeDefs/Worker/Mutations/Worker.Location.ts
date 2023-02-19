const workerLocationType = `#graphql

type Location {
  continent: String
  country: String
  city: String
  address: String
  postCode: Int
  relocate: Boolean
}

input WorkerLocation {
  id: ID!
  continent: String
  country: String
  city: String
  address: String
  postCode: Int
  relocate: Boolean
}


type Mutation {
  updateWorkerLocation(input: WorkerLocation): Location!
}
`;
export { workerLocationType };

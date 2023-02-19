const workerGeneralType = `#graphql

input WorkerGeneral {
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
  createWorkerGeneral(input: WorkerGeneral): Worker!

  updateWorkerGeneral(input: WorkerGeneral): Worker!
}
`;
export { workerGeneralType };

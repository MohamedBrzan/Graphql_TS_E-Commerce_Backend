const workerContactType = `#graphql

type Contact  {
  phone: Int
  mobile: Int
  alternativeMobile: Int
}

input WorkerContact  {
  phone: Int
  mobile: Int
  alternativeMobile: Int
}

type Mutation {
  updateWorkerContact(input: WorkerContact): Contact!
}
`;
export { workerContactType };

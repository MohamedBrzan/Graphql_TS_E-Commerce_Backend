const jobUpdateType = `#graphql

input UpdateJobOfferInput {
    id:ID!
    title: String!
    description: String!
    jobDetails: JobDetailsInput 
    requirements: String!
    inAddition: String
    type: String!
}


################################
### Unions ###
################################

type UpdateJobOfferFailed {
    message: String!
}

type UpdateJobOfferSuccess {
    jobOffer: Job!
}


union UpdateJobOfferResult = UpdateJobOfferSuccess | UpdateJobOfferFailed




type Mutation {
    updateJobOffer(input: UpdateJobOfferInput!): UpdateJobOfferResult!
}


`;

export { jobUpdateType };

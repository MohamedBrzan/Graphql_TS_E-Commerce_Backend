const jobDeleteType = `#graphql

################################
### Unions ###
################################

type DeleteJobOfferFailed {
    message: String!
}

type DeleteJobOfferSuccess {
    deleteMsg: String!
}


union DeleteJobOfferResult = DeleteJobOfferSuccess | DeleteJobOfferFailed


type Mutation {
    deleteJobOffer(id: ID!): DeleteJobOfferResult!
}

`;

export { jobDeleteType };

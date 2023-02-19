const jobCreateType = `#graphql



input SalaryInput  {
    from: Int!
    to: Int!
    currency: String!
    period: String!
    other: String!
    hide: Boolean!
}

input JobDetailsInput  {
    experience: String
    careerLevel: String
    educationLevel: String
    salary: SalaryInput 
    categories: [String]
    skills: [String]
}

input CreateJobOfferInput {
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

type CreateJobOfferFailed {
    message: String!
}

type CreateJobOfferSuccess {
    jobOffer: Job!
}


union CreateJobOfferResult = CreateJobOfferSuccess | CreateJobOfferFailed


type Mutation {
    createJobOffer(input: CreateJobOfferInput!): CreateJobOfferResult!
}

`;

export { jobCreateType };

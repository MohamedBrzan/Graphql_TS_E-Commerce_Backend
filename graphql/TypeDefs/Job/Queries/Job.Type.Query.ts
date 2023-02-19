const jobsTypeQuery = `#graphql

type Salary {
    from: Int!
    to: Int!
    currency: String!
    period: String!
    other: String!
    hide: Boolean!
}

type JobDetails {
    experience: String
    careerLevel: String
    educationLevel: String
    salary: Salary
    categories: [String]
    skills: [String]
}

type Resume {
    file: String
    photo: String
}

type Job {
    title: String!
    description: String!
    jobDetails: JobDetails
    requirements: String!
    inAddition: String
    type: String!
    published_by: ID!
    resumes: [Resume]
    viewed: [Resume]
    refused: [Resume]
    inConsideration: [Resume]
    saving: [ID!]!
    sharing: [ID!]!
}

type Query {
    getJobs : [Job!]!
}

`;

export { jobsTypeQuery };

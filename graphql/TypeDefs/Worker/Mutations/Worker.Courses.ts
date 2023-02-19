const workerCoursesType = `#graphql


type Courses {
    topic: String!
    organizationName: String!
    month: String!
    year: Int!
    additionalInfo: String!
}


input CreateCourse { 
  id:ID!
  topic: String!
  organizationName: String!
  month: String!
  year: Int!
  additionalInfo: String!
}

input UpdateCourse { 
  id:ID!
  courseId: ID!
  topic: String!
  organizationName: String!
  month: String!
  year: Int!
  additionalInfo: String!
}

input DeleteCourse { 
  id:ID!
  courseId: ID!
}

################################
### Unions ###
################################

### Courses ###

type DeleteFailed {
  message: String!
}

type DeleteCoursesSuccess {
  deletedMsg: String!
}

union CoursesResult = DeleteCoursesSuccess | DeleteFailed

type UpdateFailed {
  message: String!
}

type UpdateCoursesSuccess {
  course: Courses!
}

union CourseUpdateResult = UpdateCoursesSuccess | UpdateFailed

type Mutation {
  createWorkerCourses(input: CreateCourse): Courses!

  updateWorkerCourses(input: UpdateCourse): CourseUpdateResult!
  
  deleteWorkerCourses(input: DeleteCourse): CoursesResult!
}
`;
export { workerCoursesType };

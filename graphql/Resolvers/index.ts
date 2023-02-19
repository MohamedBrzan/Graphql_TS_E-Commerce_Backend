import { workerGeneralResolver } from './Worker/Resolvers/Worker.General';
import { userAuthenticationResolver } from './common/Resolvers/User.Auth';
import { userGeneralResolver } from './common/Resolvers/User.General';
import { workerLocationResolver } from './Worker/Resolvers/Worker.Location';
import { workerContactResolver } from './Worker/Resolvers/Worker.Contact';
import { workerDegreesResolver } from '../Resolvers/Worker/Resolvers/Worker.Degrees';
import { workerResumeResolver } from '../Resolvers/Worker/Resolvers/Worker.Resume';
import { workerHighSchoolResolver } from '../Resolvers/Worker/Resolvers/Worker.HighSchool';
import { workerCertificationsResolver } from '../Resolvers/Worker/Resolvers/Worker.Certifications';
import { workerCoursesResolver } from '../Resolvers/Worker/Resolvers/Worker.Courses';
import { workerAchievementsResolver } from '../Resolvers/Worker/Resolvers/Worker.Achievements';
import { workerWorksExamplesResolver } from '../Resolvers/Worker/Resolvers/Worker.WorksExamples';
import { workerJobResolver } from './Worker/Resolvers/Worker.Job';
import { workerLearningInterestResolver } from '../Resolvers/Worker/Resolvers/Worker.LearningInterest';
import { workerExperienceResolver } from '../Resolvers/Worker/Resolvers/Worker.Experience';
import { workerSkillResolver } from '../Resolvers/Worker/Resolvers/Worker.Skill';
import { workerFollowResolver } from './Worker/Resolvers/Worker.Follow';
import { workersResolverQuery } from '../Resolvers/Worker/Queries/Workers.Res.Query';
import { userAuthenticationUnion } from '../Resolvers/Worker/Unions/Worker.Auth';
import { userFollowResolver } from './common/Resolvers/User.Follow';
import { jobResolver } from './Job/Resolvers/Job.CRUD';
import { getWorkerByIdResolverQuery } from '../Resolvers/Worker/Queries/Worker.Res.Query';
import { getJobsResolverQuery } from '../Resolvers/Job/Queries/Job.Res.Query';
import { workerUnion } from '../Resolvers/Worker/Unions/Worker.Get';
import { workersUnion } from '../Resolvers/Worker/Unions/Workers.Get';
import { workerDegreesUnion } from '../Resolvers/Worker/Unions/Worker.Degrees';
import { workerResumeUnion } from '../Resolvers/Worker/Unions/Worker.Resume';
import { workerHighSchoolUnion } from '../Resolvers/Worker/Unions/Worker.HighSchool';
import { workerCertificationsUnion } from '../Resolvers/Worker/Unions/Worker.Certifications';
import { workerCoursesUnion } from '../Resolvers/Worker/Unions/Worker.Courses';
import { workerAchievementsUnion } from '../Resolvers/Worker/Unions/Worker.Achievements';
import { workerWorksExamplesUnion } from '../Resolvers/Worker/Unions/Worker.WorksExamples';
import { workerJobUnion } from '../Resolvers/Worker/Unions/Worker.Job';
import { workerLearningInterestUnion } from '../Resolvers/Worker/Unions/Worker.LearningInterest';
import { workerExperienceUnion } from '../Resolvers/Worker/Unions/Worker.Experience';
import { workerSkillUnion } from '../Resolvers/Worker/Unions/Worker.Skills';
import { workerFollowUnion } from '../Resolvers/Worker/Unions/Worker.Follow';
import { userFollowUnion } from './common/Unions/User.Follow';
import { jobUnions } from './Job/Unions/Job.Union';


export {
  userAuthenticationResolver,
  workerGeneralResolver,
  userGeneralResolver,
  workerLocationResolver,
  workerContactResolver,
  workerDegreesResolver,
  workerResumeResolver,
  workerHighSchoolResolver,
  workerCertificationsResolver,
  workerCoursesResolver,
  workerAchievementsResolver,
  workerWorksExamplesResolver,
  workerJobResolver,
  workerLearningInterestResolver,
  workerExperienceResolver,
  workerSkillResolver,
  workerFollowResolver,
  userFollowResolver,
  jobResolver,
  getWorkerByIdResolverQuery,
  getJobsResolverQuery,
  workersResolverQuery,
  userAuthenticationUnion,
  workerUnion,
  workersUnion,
  workerDegreesUnion,
  workerResumeUnion,
  workerHighSchoolUnion,
  workerCertificationsUnion,
  workerCoursesUnion,
  workerAchievementsUnion,
  workerWorksExamplesUnion,
  workerJobUnion,
  workerLearningInterestUnion,
  workerExperienceUnion,
  workerSkillUnion,
  workerFollowUnion,
  userFollowUnion,
  jobUnions,
};

import Education from '../Types/Education';
import Resume from '../Types/Resume';
import Skill from '../Types/Skill';
import User from './User';

enum MaterialStatus {
  Unspecified,
  Single,
  Married,
}

enum MilitaryStatus {
  NotApplicable,
  Exempted,
  Completed,
  PostPoned,
}

interface Worker extends User {
  skills: [Skill];
  license: boolean;
  education: Education;
  materialStatus: MaterialStatus;
  militaryStatus: MilitaryStatus;
  learningInterest: [string];
  yearsOfExperience: string;
  resume?: Resume;
}

export default Worker;

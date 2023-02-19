import User from "./User";

interface Moderator extends User {
  moderator: true;
}

export default Moderator
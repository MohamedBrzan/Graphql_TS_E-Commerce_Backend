import Reactions from '../Types/Reactions';
import User from './User';

interface Post {
  owner: User;
  title: string;
  description: string;
  highLights: string;
  reactions?: [Reactions];
  images?: [string];
  file?: string;
  video?: string;
}

export default Post;

import Reactions from '../Types/Reactions';
import User from './User';

type Content = {
  description: string;
  images?: [string];
  file?: [string];
  video?: string;
};

interface Blog {
  owner: User;
  title: string;
  content: [Content];
  reactions?: [Reactions];
  highLights: string;
  tags: [string];
  type: string;
}

export default Blog;

import Blog from '../Interface/Blog';
import Post from '../Interface/Post';
import Product from '../Interface/Product';
import User from '../Interface/User';

type Reaction = {
  like: [User];
  support: [User];
  insight: [User];
  laugh: [User];
  sad: [User];
  happy: [User];
  love: [User];
  celebrate: [User];
};

type Actions = {
  posts?: [Post];
  blogs?: [Blog];
};

type Share = {
  users: [User];
};

type Save = {
  users: [User];
};

type Comment = {
  owner: string;
  comment: string;
  replay: [Comment];
  reactions: [Reaction];
};

type Reactions = {
  actions?: [Actions];
  reactions?: [Reaction];
  shares?: [Share];
  saves?: [Save];
  comments?: [Comment];
  products?: [Product];
};

export default Reactions;

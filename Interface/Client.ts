import Job from './Job';
import Product from './Product';
import User from './User';

interface Client extends User {
  jobs: [Job];
  products: [Product];
}

export default Client;

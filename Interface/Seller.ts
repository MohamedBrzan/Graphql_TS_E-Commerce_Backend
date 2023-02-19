import User from './User';

interface Seller extends User {
  seller: true;
}

export default Seller;

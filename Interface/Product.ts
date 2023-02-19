import Reactions from '../Types/Reactions';
import Review from '../Types/Review';
import User from './User';

enum Status {
  Available,
  NotAvailable,
  ComingSoon,
}

type Package = {
  count: number;
  price: number;
  piece: number;
};

interface Product {
  owner: User;
  title: string;
  description: string;
  details: string;
  highLights: string;
  brand: string;
  packages?: [Package];
  price: number;
  newPrice: number;
  currency: string;
  quantity: number;
  notice: string;
  status: Status;
  sales: [User];
  colors: [string];
  tags: [string];
  type: string;
  document: string;
  information: string;
  reviews?: [Review];
  images?: [string];
  reactions?: [Reactions];
}

export default Product;

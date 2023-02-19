import SendToken from '../Utils/SendToken';

type Props = {
  model: any;
  info: {
    userType: string;
    fullName: string;
    email: string;
    password: string;
    avatar: string;
  };
  req: any;
  res: any;
  user: {};
};

export default async ({ model, info, req, res, user }: Props) => {
  user = await model.create({
    ...info,
  });

  SendToken(req, res, user);

  return { user };
};

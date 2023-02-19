import SendToken from '../Utils/SendToken';

type Props = {
  model: any;
  email: string;
  password: string;
  translate: any;
  req: any;
  res: any;
};

export default async ({
  model,
  email,
  password,
  translate,
  req,
  res,
}: Props) => {
  const user = await model.findOne({ email });

  if (!user)
    return {
      message: translate('not_found', { value: 'This Email' }),
    };

  const isVerifiedPassword = user.comparePassword(password);

  if (!isVerifiedPassword)
    return { message: translate('Invalid', { value: 'Password' }) };

  SendToken(req, res, user);

  return { user };
};

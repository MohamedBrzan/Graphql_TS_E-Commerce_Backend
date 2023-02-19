import { JwtPayload, verify } from 'jsonwebtoken';

type Props = {
  token: string;
  model: any;
  translate: any;
};

export default async function ({ token, model, translate }: Props) {
  try {
    let verified = verify(
      token,
      `${process.env.JWT_SECRET_TOKEN}`
    ) as JwtPayload;

    const user = await model.findById(verified['id']);

    if (user['_id']) return user;
  } catch (error: any) {
    return translate('not_found', { value: error.message });
  }
}

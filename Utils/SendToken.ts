export default async (req: any, res: any, user: any) => {
  const token = user.generateToken();

  // const options = {
  //   httpOnly: true,
  //   // secure: true,
  //   expire: new Date(Date.now() + 36 * 24 * 60 * 60 * 1000),
  // };

  const options = {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7,
  };

  user.token = token;

  req.headers['token'] = 'Bearer ' + token;

  res.cookie('token', token, options);

  await user.save();
};

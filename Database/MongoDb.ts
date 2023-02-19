import { connect, ConnectOptions } from 'mongoose';

export default () =>
  connect(process.env.MONGOURL!, {
    useNewUrlParser: true,
  } as ConnectOptions)
    .then(() => console.log(`Database Connected Successfully 🚀  🚀  🚀`))
    .catch((err) =>
      console.log(`Database Connect Failed ⛔️⛔️⛔️ ${err.message}`)
    );

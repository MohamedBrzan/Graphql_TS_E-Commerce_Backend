import LoginHandler from '../../../Functions/LoginHandler';
import RegisterHandler from '../../../Functions/RegisterHandler';

const userAuthenticationResolver = {
  Mutation: {
    register: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, ClientModel, translate, req, res } = ctx;
      const { userType, fullName, email, password, avatar } = args.input;

      if (!WorkerModel)
        return { message: translate('not_found', { value: 'Worker Model' }) };

      if (userType === 'Freelancer') {
        let worker = await WorkerModel.findOne({ email });

        if (worker)
          return { message: translate('duplicate', { value: 'Worker Email' }) };

        return RegisterHandler({
          model: WorkerModel,
          info: {
            userType,
            fullName,
            email,
            password,
            avatar,
          },
          req,
          res,
          user: worker,
        });
      }

      let client = await ClientModel.findOne({ email });

      if (client)
        return { message: translate('duplicate', { value: 'Client Email' }) };

      return RegisterHandler({
        model: ClientModel,
        info: {
          userType,
          fullName,
          email,
          password,
          avatar,
        },
        req,
        res,
        user: client,
      });
    },

    login: async (_: unknown, args: any, ctx: any) => {
      const { ClientModel, WorkerModel, translate, req, res } = ctx;

      const { userType, email, password } = args.input;

      if (userType === 'Freelancer') {
        return LoginHandler({
          model: WorkerModel,
          email,
          password,
          req,
          res,
          translate,
        });
      }

      return LoginHandler({
        model: ClientModel,
        email,
        password,
        req,
        res,
        translate,
      });
    },
  },
};

export { userAuthenticationResolver };

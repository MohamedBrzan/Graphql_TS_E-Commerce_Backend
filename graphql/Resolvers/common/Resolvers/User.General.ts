type UserGeneral = {
  userType: string;
  id: string;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
  bio: string;
  coverImg: string;
  nationality: string;
  age: number;
  gender: string;
  materialStatus?: string;
  militaryStatus?: string;
  active: boolean;
};

const userGeneralResolver = {
  Mutation: {
    // Create General (Direct data) Information About Worker
    createUserGeneral: async (_: unknown, args: UserGeneral, ctx: any) => {
      const { ClientModel, WorkerModel, translate } = ctx;

      const { userType, id } = args;

      if (userType === 'Freelancer') {
        let user = await WorkerModel.findOne({ _id: id });

        if (!user)
          return { message: translate('not_found', { value: 'Worker' }) };

        user = await WorkerModel.create({
          ...args,
        });

        return { ...user };
      }

      let user = await ClientModel.findOne({ _id: id });

      if (!user)
        return { message: translate('not_found', { value: 'Client' }) };

      user = await WorkerModel.create({
        ...args,
      });

      console.log(user);

      return { ...user };
    },
    // Update General (Direct data) Information About Worker
    updateUserGeneral: async (_: unknown, args: UserGeneral, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id } = args;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,
        {
          ...args,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      return { worker };
    },
  },
};

export { userGeneralResolver };

const workerGeneralResolver = {
  Mutation: {
    // Create General (Direct data) Information About Worker
    createWorkerGeneral: async (
      _: unknown,
      args: {
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
        materialStatus: string;
        militaryStatus: string;
        freelancer: boolean;
        active: boolean;
      },
      ctx: any
    ) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        fullName,
        email,
        password,
        avatar,
        bio,
        coverImg,
        nationality,
        age,
        gender,
        materialStatus,
        militaryStatus,
        freelancer,
        active,
      } = args;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.create({
        fullName,
        email,
        password,
        avatar,
        bio,
        coverImg,
        nationality,
        age,
        gender,
        materialStatus,
        militaryStatus,
        freelancer,
        active,
      });

      return { worker };
    },
    // Update General (Direct data) Information About Worker
    updateWorkerGeneral: async (
      _: unknown,
      args: {
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
        materialStatus: string;
        militaryStatus: string;
        freelancer: boolean;
        active: boolean;
      },
      ctx: any
    ) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        fullName,
        email,
        password,
        avatar,
        bio,
        coverImg,
        nationality,
        age,
        gender,
        materialStatus,
        militaryStatus,
        freelancer,
        active,
      } = args;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,
        {
          fullName,
          email,
          password,
          avatar,
          bio,
          coverImg,
          nationality,
          age,
          gender,
          materialStatus,
          militaryStatus,
          freelancer,
          active,
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

export { workerGeneralResolver };

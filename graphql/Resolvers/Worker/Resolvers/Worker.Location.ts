const workerLocationResolver = {
  Mutation: {
    // Update Location (an object data) Information About Worker
    updateWorkerLocation: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, continent, country, city, address, postCode, relocate } =
        args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,

        {
          location: {
            continent,
            country,
            city,
            address,
            postCode,
            relocate,
          },
        },

        {
          new: true,
          runValidators: true,
        }
      );

      const { location } = worker;

      return location;
    },
  },
};

export { workerLocationResolver };

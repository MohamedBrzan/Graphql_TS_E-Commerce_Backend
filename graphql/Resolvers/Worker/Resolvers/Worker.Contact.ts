const workerContactResolver = {
  Mutation: {
    // Update Contact (an object data) Information About Worker
    updateWorkerContact: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, phone, mobile, alternativeMobile } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,

        {
          contact: {
            phone,
            mobile,
            alternativeMobile,
          },
        },

        {
          new: true,
          runValidators: true,
        }
      );

      const { contact } = worker;

      return contact;
    },
  },
};

export { workerContactResolver };

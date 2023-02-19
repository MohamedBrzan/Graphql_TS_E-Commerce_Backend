const workerResumeResolver = {
  Mutation: {
    // Update Resume (an object data) Information About Worker
    updateWorkerResume: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, file, photo } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,

        {
          resume: {
            file,
            photo,
          },
        },

        {
          new: true,
          runValidators: true,
        }
      );

      const { resume } = worker;

      return resume;
    },
    // Delete Resume (an object data) Information About Worker
    deleteWorkerResume: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id } = args;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,

        {
          $set: {
            resume: {
              file: null,
              photo: null,
            },
          },
        },

        {
          new: true,
          runValidators: true,
        }
      );

      return { deletedMsg: translate('deleted', { value: 'Resume' }) };
    },
  },
};

export { workerResumeResolver };

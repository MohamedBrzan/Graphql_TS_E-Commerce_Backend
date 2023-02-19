const workerHighSchoolResolver = {
  Mutation: {
    // Update HighSchool (an object data) Information About Worker
    updateWorkerHighSchool: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        name,
        country,
        certificateName,
        languageStudy,
        graduationYear,
        grade,
        additionalInfo,
      } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,

        {
          $set: {
            'education.highSchool': {
              name,
              country,
              certificateName,
              languageStudy,
              graduationYear,
              grade,
              additionalInfo,
            },
          },
        },

        {
          new: true,
          runValidators: true,
        }
      );

      const { highSchool } = worker.education;

      return { ...highSchool };
    },

    // Delete HighSchool (an object data) Information About Worker
    deleteWorkerHighSchool: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const { highSchool } = worker.education;

      if (!highSchool)
        return { message: translate('not_found', { value: 'HighSchool' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,
        {
          $set: {
            'education.highSchool': {},
          },
        },
        { new: true, runValidators: true }
      );

      return { deletedMsg: translate('deleted', { value: 'HighSchool' }) };
    },
  },
};

export { workerHighSchoolResolver };

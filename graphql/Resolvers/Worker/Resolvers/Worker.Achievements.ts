const workerAchievementsResolver = {
  Mutation: {
    // Update Achievements (an object data) Information About Worker
    updateWorkerAchievements: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, achievements } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const achievement = await WorkerModel.findByIdAndUpdate(
        id,
        {
          $set: {
            achievements,
          },
        },
        { new: true, runValidators: true }
      );

      return { achievements: achievement };
    },
  },
};

export { workerAchievementsResolver };

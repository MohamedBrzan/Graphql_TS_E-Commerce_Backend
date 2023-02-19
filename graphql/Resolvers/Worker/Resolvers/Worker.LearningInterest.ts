const workerLearningInterestResolver = {
  Mutation: {
    // Update Learning Interest (an object data) Information About Worker
    updateWorkerLearningInterest: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, learningInterest } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker.learningInterest.push(...learningInterest);

      await worker.save();

      return { learningInterest: worker.learningInterest };
    },

    // Delete Learning Interest (an object data) Information About Worker
    deleteWorkerLearningInterest: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, index } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const { learningInterest } = worker;

      if ((index || index === 0) && learningInterest.length <= 0) {
        return { message: translate('empty', { value: 'Learning Interest' }) };
      } else if ((index || index === 0) && !learningInterest[index]) {
        return {
          message: translate('not_found', { value: 'Learning Interest Index' }),
        };
      } else if (index || index === 0) {
        learningInterest.splice(index, 1);
        await worker.save();
        return {
          deletedMsg: translate('deleted', { value: 'Learning Interest' }),
        };
      }

      return null;
    },
  },
};

export { workerLearningInterestResolver };

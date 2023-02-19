const workerJobResolver = {
  Mutation: {
    // Update Job (an object data) Information About Worker
    updateWorkerJob: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, title, fields } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker.job.title = title;
      worker.job.fields.push(...fields);

      await worker.save();

      const { job } = worker;

      return { job };
    },

    // Delete Job (an object data) Information About Worker
    deleteWorkerJobField: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, fieldIndex } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const { fields } = worker.job;

      if ((fieldIndex || fieldIndex === 0) && fields.length <= 0) {
        return { message: translate('empty', { value: 'Fields' }) };
      } else if ((fieldIndex || fieldIndex === 0) && !fields[fieldIndex]) {
        return { message: translate('not_found', { value: 'Fields Index' }) };
      } else if (fieldIndex || fieldIndex === 0) {
        fields.splice(fieldIndex, 1);
        await worker.save();
        return { deletedMsg: translate('deleted', { value: 'Image' }) };
      }

      return null;
    },
  },
};

export { workerJobResolver };

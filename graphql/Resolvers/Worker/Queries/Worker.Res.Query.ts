const getWorkerByIdResolverQuery = {
  Query: {
    getWorkerById: async (_: unknown, args: { id: string }, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id } = args;

      if (!id) return { message: translate('invalid', { value: 'id' }) };

      const worker = await WorkerModel.findById(id);

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      return { worker };
    },
  },
};

export { getWorkerByIdResolverQuery };

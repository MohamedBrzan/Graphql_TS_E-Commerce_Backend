const workersResolverQuery = {
  Query: {
    getWorkers: async (_: unknown, __: unknown, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const workers = await WorkerModel.find();

      if (!workers)
        return { message: translate('not_found', { value: 'Workers' }) };

      return { workers };
    },
  },
};

export { workersResolverQuery };

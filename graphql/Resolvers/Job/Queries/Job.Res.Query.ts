const getJobsResolverQuery = {
  Query: {
    getJobs: async (_: any, __: any, ctx: any) => {
      const { JobModel } = ctx;

      const jobs = await JobModel.find();

      return jobs;
    },
  },
};

export { getJobsResolverQuery };

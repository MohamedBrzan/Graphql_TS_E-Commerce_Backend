const jobResolver = {
  Mutation: {
    createJobOffer: async (_: any, args: any, ctx: any) => {
      const { ClientModel, JobModel, req } = ctx;

      const {
        title,
        description,
        jobDetails,
        requirements,
        inAddition,
        type,
        resumes,
        viewed,
        refused,
        inConsideration,
        saving,
        sharing,
      } = args.input;

      const admin = await ClientModel.findById(req.headers.authorization);

      const jobOffer = await JobModel.create({
        title,
        description,
        details: jobDetails,
        requirements,
        inAddition,
        type,
        published_by: req.headers.authorization,
        resumes,
        viewed,
        refused,
        inConsideration,
        saving,
        sharing,
      });

      admin.jobs.push(jobOffer);

      await admin.save();

      return { jobOffer };
    },

    updateJobOffer: async (_: any, args: any, ctx: any) => {
      const { JobModel, translate } = ctx;

      const {
        id,
        title,
        description,
        jobDetails,
        requirements,
        inAddition,
        type,
      } = args.input;

      let jobOffer = await JobModel.findById(id);

      if (!jobOffer)
        return { message: translate('not_found', { value: 'Job Offer Id' }) };

      jobOffer = await JobModel.findByIdAndUpdate(
        id,
        {
          title,
          description,
          jobDetails,
          requirements,
          inAddition,
          type,
        },
        { new: true, runValidators: true }
      );

      return { jobOffer };
    },

    deleteJobOffer: async (_: any, args: any, ctx: any) => {
      const { ClientModel, JobModel, translate } = ctx;

      const { id } = args;

      let jobOffer = await JobModel.findById(id);

      if (!jobOffer)
        return { message: translate('not_found', { value: 'Job Offer Id' }) };

      const admin = await ClientModel.findById(jobOffer.published_by);

      if (!admin)
        return { message: translate('not_found', { value: 'Admin' }) };

      admin.jobs.pull(id);

      await admin.save();

      jobOffer = await JobModel.findByIdAndRemove(id);

      return { deleteMsg: translate('deleted', { value: 'Job Offer' }) };
    },
  },
};

export { jobResolver };

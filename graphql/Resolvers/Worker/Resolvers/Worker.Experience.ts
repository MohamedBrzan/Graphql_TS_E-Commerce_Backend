const workerExperienceResolver = {
  Mutation: {
    // Create Experience (an object data) Information About Worker
    createWorkerExperience: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        experienceType,
        title,
        description,
        category,
        summary,
        company: { name, size, industry, website },
        HRGmail,
        experienceDate,
        careerLevel,
        country,
        city,
        achievements,
        salary: { from, to, currency, period, other, hide },
      } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const { still, start, end } = experienceDate;

      worker = await WorkerModel.findByIdAndUpdate(
        id,
        {
          $push: {
            experience: {
              type: experienceType,
              title,
              description,
              category,
              summary,
              company: {
                name,
                size,
                industry,
                website,
              },
              HRGmail,
              date: { still, start, end },
              careerLevel,
              country,
              city,
              achievements,
              salary: {
                from,
                to,
                currency,
                period,
                other,
                hide,
              },
            },
          },
        },
        { new: true, runValidators: true }
      );

      return {
        experience: {
          experienceType,
          title,
          description,
          category,
          summary,
          company: {
            name,
            size,
            industry,
            website,
          },
          HRGmail,
          experienceDate: { still, start, end },
          careerLevel,
          country,
          city,
          achievements,
          salary: {
            from,
            to,
            currency,
            period,
            other,
            hide,
          },
        },
      };
    },

    // Update Experience (an object data) Information About Worker
    updateWorkerExperience: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        experienceId,
        experienceType,
        title,
        description,
        category,
        summary,
        company,
        HRGmail,
        experienceDate,
        careerLevel,
        country,
        city,
        achievements,
        salary,
      } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const findExperience = worker.experience.find(
        (experience: { _id: { toString: () => any } }) =>
          experience._id.toString() === experienceId
      );

      if (findExperience) {
        (findExperience.type = experienceType),
          (findExperience.title = title),
          (findExperience.description = description),
          (findExperience.category = category),
          (findExperience.summary = summary),
          (findExperience.company = { ...company }),
          (findExperience.HRGmail = HRGmail),
          (findExperience.date = { ...experienceDate }),
          (findExperience.careerLevel = careerLevel),
          (findExperience.country = country),
          (findExperience.city = city),
          (findExperience.achievements = achievements),
          (findExperience.salary = { ...salary });
      }

      await worker.save();

      return { experience: findExperience };
    },

    // Delete Experience (an object data) Information About Worker
    deleteWorkerExperience: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, experienceId } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const findExperience = worker.experience.find(
        (experience: { _id: string }) =>
          experience._id.toString() === experienceId
      );

      if (!findExperience)
        return { message: translate('not_found', { value: 'Worker Experience' }) };

      worker.experience.pull(findExperience);

      await worker.save();

      return { deletedMsg: translate('deleted', { value: 'Experience' }) };
    },
  },
};

export { workerExperienceResolver };

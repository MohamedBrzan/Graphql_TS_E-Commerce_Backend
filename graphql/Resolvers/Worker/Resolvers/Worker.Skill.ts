const workerSkillResolver = {
  Mutation: {
    // CreateSkill (an object data) Information About Worker
    createWorkerSkill: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        name,
        yearsOfExperience,
        proficiency,
        interest,
        justification,
      } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,
        {
          $push: {
            skills: {
              name,
              yearsOfExperience,
              proficiency,
              interest,
              justification,
            },
          },
        },
        { new: true, runValidators: true }
      );

      const skill = {
        name,
        yearsOfExperience,
        proficiency,
        interest,
        justification,
      };

      return { skill };
    },

    // UpdateSkill (an object data) Information About Worker
    updateWorkerSkill: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        skillId,
        name,
        yearsOfExperience,
        proficiency,
        interest,
        justification,
      } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const findSkill = worker.skills.find(
        (skill: { _id: { toString: () => any } }) =>
          skill._id.toString() === skillId
      );

      if (findSkill) {
        (findSkill.name = name),
          (findSkill.yearsOfExperience = yearsOfExperience),
          (findSkill.proficiency = proficiency),
          (findSkill.interest = interest),
          (findSkill.justification = justification);
      }

      await worker.save();

      return { skill: findSkill };
    },

    // DeleteSkill (an object data) Information About Worker
    deleteWorkerSkill: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, skillId } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const findSkill = worker.skills.find(
        (skill: { _id: string }) => skill._id.toString() === skillId
      );

      if (!findSkill)
        return {
          message: translate('not_found', { value: 'Worker Skill' }),
        };

      worker.skills.pull(findSkill);

      await worker.save();

      return { deletedMsg: translate('deleted', { value: 'Skill' }) };
    },
  },
};

export { workerSkillResolver };

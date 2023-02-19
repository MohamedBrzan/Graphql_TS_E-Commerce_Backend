const workerDegreesResolver = {
  Mutation: {
    // Create Degree (an object data) Information About Worker
    createWorkerDegree: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        level,
        country,
        university,
        fields,
        start,
        end,
        grade,
        studySubject,
        additionalInfo,
      } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker = await WorkerModel.findByIdAndUpdate(
        id,

        {
          $push: {
            'education.degrees': {
              level,
              country,
              university,
              fields,
              start,
              end,
              grade,
              studySubject,
              additionalInfo,
            },
          },
        },

        {
          new: true,
          runValidators: true,
        }
      );

      // const { degrees } = worker.education;

      return {
        level,
        country,
        university,
        fields,
        start,
        end,
        grade,
        studySubject,
        additionalInfo,
      };
    },

    // Update Degree (an object data) Information About Worker
    updateWorkerDegree: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        degreeId,
        level,
        country,
        university,
        fields,
        start,
        end,
        grade,
        studySubject,
        additionalInfo,
      } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const findDegree = worker.education.degrees.find(
        (degree: any) => degree._id.toString() === degreeId
      );

      if (!findDegree)
        return { message: translate('not_found', { value: 'Degree' }) };

      findDegree.level = level;
      findDegree.country = country;
      findDegree.university = university;
      findDegree.fields = fields;
      findDegree.start = start;
      findDegree.end = end;
      findDegree.grade = grade;
      findDegree.studySubject = studySubject;
      findDegree.additionalInfo = additionalInfo;

      await worker.save();

      // const { degrees } = worker.education;

      return {
        level,
        country,
        university,
        fields,
        start,
        end,
        grade,
        studySubject,
        additionalInfo,
      };
    },

    // Delete Degree (an object data) Information About Worker
    deleteWorkerDegree: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, degreeId } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const findDegree = worker.education.degrees.find(
        (degree: any) => degree._id.toString() === degreeId
      );

      if (!findDegree)
        return { message: translate('not_found', { value: 'Degree' }) };

      // worker.education.degrees.splice(findDegree, 1);

      worker = await WorkerModel.findByIdAndUpdate(
        id,
        {
          $pull: {
            'education.degrees': findDegree,
          },
        },
        { new: true, runValidators: true }
      );

      return { deletedMsg: translate('deleted', { value: 'Degree' }) };
    },
  },
};

export { workerDegreesResolver };

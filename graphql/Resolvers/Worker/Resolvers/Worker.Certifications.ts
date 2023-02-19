const workerCertificationsResolver = {
  Mutation: {
    // Create Certifications (an object data) Information About Worker
    createWorkerCertifications: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, name, date, score, link, additionalInfo } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      await WorkerModel.findByIdAndUpdate(
        id,
        {
          $push: {
            'education.certifications': {
              name,
              date,
              score,
              link,
              additionalInfo,
            },
          },
        },
        { new: true, runValidators: true }
      );

      await worker.save();

      return { name, date, score, link, additionalInfo };
    },

    // Update Certifications (an object data) Information About Worker
    updateWorkerCertifications: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, certificationId, name, date, score, link, additionalInfo } =
        args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      let certification = worker.education.certifications.find(
        (c: any) => c._id.toString() === certificationId
      );

      if (!certification)
        return {
          message: translate('not_found', { value: 'Certification Id' }),
        };

      certification.name = name;
      certification.date = date;
      certification.score = score;
      certification.link = link;
      certification.additionalInfo = additionalInfo;

      await worker.save();

      return { certification };
    },

    // Delete Certifications (an object data) Information About Worker
    deleteWorkerCertifications: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, certificationId } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const certification = worker.education.certifications.find(
        (c: any) => c._id.toString() === certificationId
      );

      if (!certification)
        return {
          message: translate('not_found', { value: 'Certification Id' }),
        };

      await WorkerModel.findByIdAndUpdate(
        id,
        {
          $pull: {
            'education.certifications': certification,
          },
        },
        { new: true, runValidators: true }
      );

      return { deletedMsg: translate('deleted', { value: 'Certification' }) };
    },
  },
};

export { workerCertificationsResolver };

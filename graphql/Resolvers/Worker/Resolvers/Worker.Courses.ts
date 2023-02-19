const workerCoursesResolver = {
  Mutation: {
    // Create Courses (an object data) Information About Worker
    createWorkerCourses: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, topic, organizationName, month, year, additionalInfo } =
        args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      await WorkerModel.findByIdAndUpdate(
        id,
        {
          $push: {
            'education.courses': {
              topic,
              organizationName,
              month,
              year,
              additionalInfo,
            },
          },
        },
        { new: true, runValidators: true }
      );

      await worker.save();

      return { topic, organizationName, month, year, additionalInfo };
    },

    // Update Courses (an object data) Information About Worker
    updateWorkerCourses: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const {
        id,
        courseId,
        topic,
        organizationName,
        month,
        year,
        additionalInfo,
      } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      let course = worker.education.courses.find(
        (c: any) => c._id.toString() === courseId
      );

      if (!course)
        return {
          message: translate('not_found', { value: 'Course Id' }),
        };

      course.topic = topic;
      course.organizationName = organizationName;
      course.month = month;
      course.year = year;
      course.additionalInfo = additionalInfo;

      await worker.save();

      return { course };
    },

    // Delete Courses (an object data) Information About Worker
    deleteWorkerCourses: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, courseId } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const course = worker.education.courses.find(
        (c: any) => c._id.toString() === courseId
      );

      if (!course)
        return {
          message: translate('not_found', { value: 'Course Id' }),
        };

      await WorkerModel.findByIdAndUpdate(
        id,
        {
          $pull: {
            'education.courses': course,
          },
        },
        { new: true, runValidators: true }
      );

      return { deletedMsg: translate('deleted', { value: 'Course' }) };
    },
  },
};

export { workerCoursesResolver };

const workerWorksExamplesResolver = {
  Mutation: {
    // Create WorksExamples (an object data) Information About Worker
    createWorkerWorksExamples: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, images, videos } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      worker.worksExamples.images.push(...images);
      worker.worksExamples.videos.push(...videos);

      await worker.save();

      const { worksExamples } = worker;

      return { worksExamples };
    },

    // Delete WorksExamples (an object data) Information About Worker
    deleteWorkerWorksExamples: async (_: unknown, args: any, ctx: any) => {
      const { WorkerModel, translate } = ctx;

      const { id, imageIndex, videoIndex } = args.input;

      let worker = await WorkerModel.findOne({ _id: id });

      if (!worker)
        return { message: translate('not_found', { value: 'Worker' }) };

      const { images, videos } = worker.worksExamples;

      if ((imageIndex || imageIndex === 0) && images.length <= 0) {
        return { message: translate('empty', { value: 'Images' }) };
      } else if ((videoIndex || videoIndex === 0) && videos.length <= 0) {
        return { message: translate('empty', { value: 'Videos' }) };
      } else if ((imageIndex || imageIndex === 0) && !images[imageIndex]) {
        return { message: translate('not_found', { value: 'Image Index' }) };
      } else if ((videoIndex || videoIndex === 0) && !videos[videoIndex]) {
        return { message: translate('not_found', { value: 'Video Index' }) };
      } else if (imageIndex || imageIndex === 0) {
        images.splice(imageIndex, 1);
        await worker.save();
        return { deletedMsg: translate('deleted', { value: 'Image' }) };
      } else if (videoIndex || videoIndex === 0) {
        videos.splice(videoIndex, 1);
        await worker.save();
        return { deletedMsg: translate('deleted', { value: 'Video' }) };
      }

      return null;
    },
  },
};

export { workerWorksExamplesResolver };

const workerWorksExamplesUnion = {
  CreateWorksExamplesResult: {
    __resolveType(obj: any) {
      if (obj.worksExamples) return 'CreateSuccess';

      if (obj.message) return 'CreateFailed';

      return null;
    },
  },

  // UpdateWorksExamplesResult: {
  //   __resolveType(obj: any) {
  //     if (obj.worksExamples) return 'UpdateSuccess';

  //     if (obj.message) return 'UpdateFailed';

  //     return null;
  //   },
  // },

  DeleteWorksExamplesResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteSuccess';

      if (obj.message) return 'DeleteFailed';

      return null;
    },
  },
};

export { workerWorksExamplesUnion };

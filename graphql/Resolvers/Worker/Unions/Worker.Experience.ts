const workerExperienceUnion = {
  CreateWorkerExperienceResult: {
    __resolveType(obj: any) {
      if (obj.experience) return 'CreateWorkerExperienceSuccess';

      if (obj.message) return 'CreateWorkerExperienceFailed';

      return null;
    },
  },

  UpdateWorkerExperienceResult: {
    __resolveType(obj: any) {
      if (obj.experience) return 'UpdateWorkerExperienceSuccess';

      if (obj.message) return 'UpdateWorkerExperienceFailed';

      return null;
    },
  },

  DeleteWorkerExperienceResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteWorkerExperienceSuccess';

      if (obj.message) return 'DeleteWorkerExperienceFailed';

      return null;
    },
  },
};

export { workerExperienceUnion };

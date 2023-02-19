const workerJobUnion = {
  UpdateJobResult: {
    __resolveType(obj: any) {
      if (obj.job) return 'UpdateSuccess';

      if (obj.message) return 'UpdateFailed';

      return null;
    },
  },

  DeleteJobResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteSuccess';

      if (obj.message) return 'DeleteFailed';

      return null;
    },
  },
};

export { workerJobUnion };

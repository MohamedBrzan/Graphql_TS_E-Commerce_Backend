const workerFollowUnion = {
  CreateWorkerFollowResult: {
    __resolveType(obj: any) {
      if (obj.followed) return 'CreateWorkerFollowSuccess';

      if (obj.message) return 'CreateWorkerFollowFailed';

      return null;
    },
  },
  DeleteWorkerFollowResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteWorkerFollowSuccess';

      if (obj.message) return 'DeleteWorkerFollowFailed';

      return null;
    },
  },
};

export { workerFollowUnion };

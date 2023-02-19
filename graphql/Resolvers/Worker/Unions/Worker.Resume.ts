const workerResumeUnion = {
  DeleteResumeResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteResumeSuccess';

      if (obj.message) return 'DeleteFailed';

      return null;
    },
  },
};

export { workerResumeUnion };

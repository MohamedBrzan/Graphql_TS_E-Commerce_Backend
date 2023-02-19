const workerUnion = {
  WorkerResult: {
    __resolveType(obj: any) {
      if (obj.worker) return 'FetchWorkerSuccess';

      if (obj.message) return 'FetchFailed';

      return null;
    },
  },
};

export { workerUnion };

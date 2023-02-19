const workersUnion = {
  WorkersResult: {
    __resolveType(obj: any) {
      if (obj.workers) return 'FetchWorkersSuccess';

      if (obj.message) return 'FetchFailed';

      return null;
    },
  },
};

export { workersUnion };

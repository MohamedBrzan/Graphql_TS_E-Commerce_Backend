const workerDegreesUnion = {
  DegreeResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteDegreeSuccess';

      if (obj.message) return 'DeleteFailed';

      return null;
    },
  },
};

export { workerDegreesUnion };

const workerHighSchoolUnion = {
  HighSchoolResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteHighSchoolSuccess';

      if (obj.message) return 'DeleteFailed';

      return null;
    },
  },
};

export { workerHighSchoolUnion };

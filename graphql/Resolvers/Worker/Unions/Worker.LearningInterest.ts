const workerLearningInterestUnion = {
  UpdateLearningInterestResult: {
    __resolveType(obj: any) {
      if (obj.learningInterest) return 'UpdateLearningInterestSuccess';

      if (obj.message) return 'UpdateLearningInterestFailed';

      return null;
    },
  },

  DeleteLearningInterestResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteLearningInterestSuccess';

      if (obj.message) return 'DeleteLearningInterestFailed';

      return null;
    },
  },
};

export { workerLearningInterestUnion };

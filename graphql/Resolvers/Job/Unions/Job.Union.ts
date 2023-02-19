const jobUnions = {
  CreateJobOfferResult: {
    __resolveType(obj: any) {
      if (obj.jobOffer) return 'CreateJobOfferSuccess';

      if (obj.message) return 'CreateJobOfferFailed';

      return null;
    },
  },

  UpdateJobOfferResult: {
    __resolveType(obj: any) {
      if (obj.jobOffer) return 'UpdateJobOfferSuccess';

      if (obj.message) return 'UpdateJobOfferFailed';

      return null;
    },
  },

  DeleteJobOfferResult: {
    __resolveType(obj: any) {
      if (obj.deleteMsg) return 'DeleteJobOfferSuccess';

      if (obj.message) return 'DeleteJobOfferFailed';

      return null;
    },
  },
};

export { jobUnions };

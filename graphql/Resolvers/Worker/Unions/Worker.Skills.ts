const workerSkillUnion = {
  CreateWorkerSkillResult: {
    __resolveType(obj: any) {
      if (obj.skill) return 'CreateWorkerSkillSuccess';

      if (obj.message) return 'CreateWorkerSkillFailed';

      return null;
    },
  },

  UpdateWorkerSkillResult: {
    __resolveType(obj: any) {
      if (obj.skill) return 'UpdateWorkerSkillSuccess';

      if (obj.message) return 'UpdateWorkerSkillFailed';

      return null;
    },
  },

  DeleteWorkerSkillResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteWorkerSkillSuccess';

      if (obj.message) return 'DeleteWorkerSkillFailed';

      return null;
    },
  },
};

export { workerSkillUnion };

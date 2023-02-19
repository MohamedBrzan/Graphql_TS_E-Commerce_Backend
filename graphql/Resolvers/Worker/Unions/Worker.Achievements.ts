const workerAchievementsUnion = {
  AchievementsResult: {
    __resolveType(obj: any) {
      if (obj.achievements) return 'UpdateAchievementsSuccess';

      if (obj.message) return 'UpdateFailed';

      return null;
    },
  },
};

export { workerAchievementsUnion };

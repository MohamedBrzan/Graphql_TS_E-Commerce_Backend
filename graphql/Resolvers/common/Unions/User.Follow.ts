const userFollowUnion = {
  CreateUserFollowResult: {
    __resolveType(obj: any) {
      if (obj.followed) return 'CreateUserFollowSuccess';

      if (obj.message) return 'CreateUserFollowFailed';

      return null;
    },
  },
  DeleteUserFollowResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteUserFollowSuccess';

      if (obj.message) return 'DeleteUserFollowFailed';

      return null;
    },
  },
};

export { userFollowUnion };

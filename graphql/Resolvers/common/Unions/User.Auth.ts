const userAuthenticationUnion = {
  AuthenticationResult: {
    __resolveType(obj: any) {
      if (obj.user) return 'AuthenticationSuccess';

      if (obj.message) return 'Failed';

      return null;
    },
  },
};

export { userAuthenticationUnion };

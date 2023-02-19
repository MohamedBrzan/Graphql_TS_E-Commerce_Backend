const workerCertificationsUnion = {
  CertificationsResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteCertificationsSuccess';

      if (obj.message) return 'DeleteFailed';

      return null;
    },
  },
  CertificationUpdateResult: {
    __resolveType(obj: any) {
      if (obj.certification) return 'UpdateCertificationSuccess';

      if (obj.message) return 'UpdateFailed';

      return null;
    },
  },
};

export { workerCertificationsUnion };

const workerCoursesUnion = {
  CoursesResult: {
    __resolveType(obj: any) {
      if (obj.deletedMsg) return 'DeleteCoursesSuccess';

      if (obj.message) return 'DeleteFailed';

      return null;
    },
  },
  CourseUpdateResult: {
    __resolveType(obj: any) {
      if (obj.course) return 'UpdateCoursesSuccess';

      if (obj.message) return 'UpdateFailed';

      return null;
    },
  },
};

export { workerCoursesUnion };

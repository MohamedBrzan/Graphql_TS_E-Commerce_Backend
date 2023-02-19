export default (controllers: (arg0: any, arg1: any, arg2: any) => any) =>
  (
    req: any,
    res: any,
    next: ((reason: any) => PromiseLike<never>) | null | undefined
  ) =>
    Promise.resolve(controllers(req, res, next)).catch(next);

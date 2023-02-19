import bcrypt from 'bcryptjs';

export default (schema: any) =>
  (schema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
  });

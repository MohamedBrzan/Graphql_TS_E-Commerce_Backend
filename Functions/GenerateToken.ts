import jwt from 'jsonwebtoken';

// User Generate Token
export default (schema: any) =>
  (schema.methods.generateToken = function () {
    return jwt.sign(
      { id: this._id, email: this.email },
      `${process.env.JWT_SECRET_TOKEN}`,
      {
        expiresIn: '24h',
      }
    );
  });

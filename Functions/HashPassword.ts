import bcrypt from 'bcryptjs';

// Hash Password When Register

export default (schema: any) =>
  schema.pre('save', function (next: any) {
    if (schema.isModified('password')) {
      return bcrypt.genSalt(12, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(schema.password, salt, function (err, hash) {
          if (err) return next(err);
          schema.password = hash;
          next();
        });
      });
    }
    return next();
  });

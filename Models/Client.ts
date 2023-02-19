import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Client from '../Interface/Client';
import ComparePassword from '../Functions/ComparePassword';
import HashPassword from '../Functions/HashPassword';
import GenerateToken from '../Functions/GenerateToken';

const ClientSchema = new Schema(
  {
    avatar: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowerCase: true },
    password: { type: String, required: true },
    rate: { type: Number, default: 0 },
    bio: { type: String },
    coverImg: { type: String },
    nationality: { type: String },
    age: { type: Number },
    gender: { type: String },
    achievements: { type: String },

    worksExamples: { images: [{ type: String }], videos: [{ type: String }] },

    following: [{ type: Schema.Types.ObjectId, ref: 'Client' }],

    followers: [{ type: Schema.Types.ObjectId, ref: 'Client' }],

    job: {
      title: { type: String },
      fields: [{ type: String }],
    },

    location: {
      continent: { type: String },
      country: { type: String },
      city: { type: String },
      address: { type: String },
      postCode: { type: Number },
      relocate: { type: Boolean, default: false },
    },

    contact: {
      phone: { type: Number, default: -1, required: true },
      mobile: { type: Number, default: -1, required: true },
      alternativeMobile: { type: Number, default: -1, required: true },
    },

    blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],

    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],

    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],

    messages: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'Message' },
        text: { type: String },
      },
    ],

    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],

    onlinePresence: {
      linkedin: String,
      facebook: String,
      twitter: String,
      behance: String,
      instagram: String,
      github: String,
      stackOverflow: String,
      youtube: String,
      blog: String,
      gmail: String,
      website: String,
      other: String,
    },

    reactions: {
      posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
      blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
      products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    },

    languages: [
      {
        name: { type: String },
        reading: { type: Number },
        writing: { type: Number },
        listening: { type: Number },
        speaking: { type: Number },
        justification: { type: String },
      },
    ],

    materialStatus: {
      type: String,
      enum: ['Unspecified', 'Single', 'Married'],
    },

    yearsOfExperience: { type: String },

    reviews: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'Client' },
        review: {
          text: { type: String },
          value: { type: Number },
        },
      },
    ],

    userType: {
      type: String,
      default: 'Client',
      required: true,
    },

    active: { type: Boolean, default: false },

    token: { type: String, default: null },
  },
  { timestamps: true }
);

// Hash Password When Register
ClientSchema.pre('save', function (next) {
  const user = this;
  if (this.isModified('password')) {
    return bcrypt.genSalt(12, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }
  return next();
});

// User Generate Token
ClientSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email },
    `${process.env.JWT_SECRET_TOKEN}`,
    {
      expiresIn: '24h',
    }
  );
};

// Check Password
ClientSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const Client = model<Client>('Client', ClientSchema);

HashPassword(ClientSchema);

// User Generate Token
GenerateToken(ClientSchema);

// Check Password
ComparePassword(ClientSchema);

const ClientModel = model<Client>('Client', ClientSchema);

export default ClientModel;

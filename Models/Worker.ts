import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Worker from '../Interface/Worker';
import ComparePassword from '../Functions/ComparePassword';
import HashPassword from '../Functions/HashPassword';
import GenerateToken from '../Functions/GenerateToken';

const WorkerSchema = new Schema(
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
    license: { type: Boolean, default: false },
    achievements: { type: String },

    worksExamples: { images: [{ type: String }], videos: [{ type: String }] },

    following: [{ type: Schema.Types.ObjectId, ref: 'Worker' }],

    followers: [{ type: Schema.Types.ObjectId, ref: 'Worker' }],

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

    jobs: {
      applied: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
      approved: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
      refused: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
      posted: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
    },

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

    experience: [
      {
        type: {
          type: String,
          enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        },
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: [{ type: String, required: true }],
        summary: { type: String, required: true },
        company: {
          name: { type: String, required: true },
          size: { type: String, required: true },
          industry: [{ type: String, required: true }],
          website: { type: String, required: true },
        },
        HRGmail: { type: String, required: true },
        date: {
          start: { type: String, required: true },
          end: { type: String, required: true },
          still: { type: Boolean, default: false, required: true },
        },
        careerLevel: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        achievements: { type: String, required: true },
        salary: {
          from: { type: Number, required: true },
          to: { type: Number, required: true },
          currency: { type: String, required: true },
          period: { type: String, required: true },
          other: { type: String, required: true },
          hide: { type: Boolean, default: false, required: true },
        },
      },
    ],

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

    skills: [
      {
        name: { type: String, required: true },
        yearsOfExperience: { type: String, required: true },
        proficiency: { type: Number, required: true },
        interest: { type: Number, required: true },
        justification: { type: String, required: true },
      },
    ],

    education: {
      degrees: [
        {
          level: { type: String },
          country: { type: String },
          university: { type: String },
          fields: [{ type: String }],
          start: { type: String },
          end: { type: String },
          grade: { type: String },
          studySubject: { type: String },
          additionalInfo: { type: String },
        },
      ],

      highSchool: {
        name: { type: String },
        country: { type: String },
        certificateName: { type: String },
        languageStudy: { type: String },
        graduationYear: { type: Number },
        grade: { type: String },
        additionalInfo: { type: String },
      },

      certifications: [
        {
          name: { type: String },
          date: { type: String },
          score: { type: Number },
          link: { type: String },
          id: { type: Number },
          additionalInfo: { type: String },
        },
      ],

      courses: [
        {
          topic: { type: String },
          organizationName: { type: String },
          month: { type: String },
          year: { type: Number },
          additionalInfo: { type: String },
        },
      ],
    },

    materialStatus: {
      type: String,
      enum: ['Unspecified', 'Single', 'Married'],
    },

    militaryStatus: {
      type: String,
      enum: ['NotApplicable', 'Exempted', 'Completed', 'PostPoned'],
    },

    learningInterest: [{ type: String }],

    yearsOfExperience: { type: String },

    resume: {
      file: String,
      photo: String,
    },

    reviews: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'Worker' },
        review: {
          text: { type: String },
          value: { type: Number },
        },
      },
    ],

    userType: {
      type: String,
      default: 'Freelancer',
      required: true,
      enum: ['Freelancer', 'Client', 'Moderator'],
    },

    active: { type: Boolean, default: false },

    token: { type: String, default: null },
  },
  { timestamps: true }
);

// Hash Password When Register
WorkerSchema.pre('save', function (next) {
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
WorkerSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email },
    `${process.env.JWT_SECRET_TOKEN}`,
    {
      expiresIn: '24h',
    }
  );
};

// Check Password
WorkerSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};
HashPassword(WorkerSchema);

// User Generate Token
GenerateToken(WorkerSchema);

// Check Password
ComparePassword(WorkerSchema);

const WorkerModel = model<Worker>('Worker', WorkerSchema);

export default WorkerModel;

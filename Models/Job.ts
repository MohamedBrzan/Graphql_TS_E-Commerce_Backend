import { Schema, model } from 'mongoose';
import Job from '../Interface/Job';

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    details: {
      experience: { type: String, required: true },
      careerLevel: { type: String, required: true },
      educationLevel: { type: String, required: true },
      salary: {
        from: { type: Number, required: true },
        to: { type: Number, required: true },
        currency: { type: String, required: true },
        period: { type: String, required: true },
        other: { type: String, required: true },
        hide: { type: Boolean, default: false, required: true },
      },
      categories: [{ type: String, required: true }],
      skills: [{ type: String, required: true }],
    },
    requirements: { type: String, required: true },
    inAddition: { type: String, required: true },
    type: { type: String, required: true },
    published_by: { type: Schema.Types.ObjectId },
    resumes: [{ file: { type: String }, photo: { type: String } }],
    viewed: [{ type: Schema.Types.ObjectId, ref: 'Worker' }],

    refused: [{ type: Schema.Types.ObjectId, ref: 'Worker' }],

    inConsideration: [{ type: Schema.Types.ObjectId, ref: 'Worker' }],

    saving: [{ type: Schema.Types.ObjectId }],

    sharing: [{ type: Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

const JobModel = model<Job>('Job', JobSchema);

export default JobModel;

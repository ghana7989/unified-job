import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { isPhoneNumberValid, isValidUrl } from 'src/utils/validators';
import {
  IBasicDetails,
  IEducation,
  ILanguage,
  ISkill,
  IUser,
} from '@unified-job/types';

const languageSchema = new mongoose.Schema<ILanguage>({
  languageName: { type: String, required: true },
  proficiencyLevel: { type: String, required: true },
});

const skillSchema = new mongoose.Schema<ISkill>({
  skillName: { type: String, required: true },
  experienceLevel: { type: String, required: true },
});

const educationSchema = new mongoose.Schema<IEducation>({
  institutionName: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  grade: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
});

const basicDetailsSchema = new mongoose.Schema<IBasicDetails>({
  username: { type: String, unique: true, index: true },
  mobileNumbers: {
    type: [String],
    validate: {
      validator: (v: string[]) => {
        if (v.length === 0) return true;
        return v.every((e) => isPhoneNumberValid(e));
      },
      message: 'Invalid phone number(s)',
    },
    default: [],
  },
  defaultMobileNumber: {
    type: String,
    default: '',
  },
  profilePicture: {
    type: String,
    default: '',
  },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  birthName: { type: String, default: '' },
  personalStatement: { type: String, default: '' },
  preferredTimezone: { type: String, default: '' },
  currentTimezone: { type: String, default: '' },
  socialMediaLinks: {
    type: [String],
    default: [],
    validate: {
      validator: (v: string[]) => {
        if (v.length === 0) return true;
        return v.every((e) => isValidUrl(e));
      },
      message: 'Invalid URL(s)',
    },
  },
});

const userSchema = new mongoose.Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true, select: false },
    basicDetails: { type: basicDetailsSchema, required: false },
    languages: {
      type: [languageSchema],
      default: [],
    },
    education: {
      type: [educationSchema],
      default: [],
    },
    skills: {
      type: [skillSchema],
      default: [],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;

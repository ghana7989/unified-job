export interface ILanguage {
  languageName: string;
  proficiencyLevel: string; /// Basic, Intermediate, Fluent, Native
}

export interface ISkill {
  skillName: string;
  experienceLevel: string; /// Beginner, Intermediate, Advanced, Expert
}

export interface IEducation {
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  grade: string;
  startDate: Date;
  endDate: Date;
  description: string;
}
export interface IBasicDetails {
  username: string;
  mobileNumbers: string[];
  defaultMobileNumber: string;
  profilePicture: string;
  // Personal Details
  firstName: string;
  lastName: string;
  birthName: string;
  personalStatement: string; //A personal statement is an account of your achievements, talents, interests and goals often included in job or university applications or on resumes.
  // Contact and Accessibility
  preferredTimezone: string;
  currentTimezone: string;
  socialMediaLinks: string[];
}
export interface IUser {
  email: string;
  password: string;
  basicDetails: IBasicDetails;
  languages: ILanguage[];
  education: IEducation[];
  skills: ISkill[];
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

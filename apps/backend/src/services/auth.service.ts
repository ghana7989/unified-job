import User from 'src/api/models/user.model';
import bcrypt from 'bcrypt';

export const createUser = async (email: string, password: string) => {
  const user = new User({ email, password });
  await user.save();
  return user;
};

export const isPasswordValid = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) return false;
  return true;
};

import bcrypt from 'bcrypt';
import User from 'src/api/models/user.model';

export const createUser = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  return user;
};

import { UpdateBasicDetailsBody } from '@unified-job/types';
import User from 'src/api/models/user.model';

const userService = {
  async updateBasicDetails(userId: string, details: UpdateBasicDetailsBody) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    for (const key in details) {
      if (details[key]) {
        user.basicDetails[key] = details[key];
      }
    }
    await user.save();
    return user;
  },
};

export default userService;

import User from './model';
import { googleAuth } from './utils/googleAuth';
import { facebookAuth } from './utils/facebookAuth';
import { createToken } from './utils/createToken';

export const loginWithAuth0 = async (req, res) => {
  const { provider, token } = req.body;
  let userInfo;

  if (provider === 'google') {
    try {
      userInfo = await googleAuth(token);
    } catch (e) {
      return res.status(400).json({ error: true, message: 'Something wrong happen!' });
    }
  } else {
    try {
      userInfo = await facebookAuth(token);
    } catch (e) {
      return res.status(400).json({ error: true, message: 'Something wrong happen!' });
    }
  }

  try {
    const user = await User.findOrCreate(userInfo);
    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
      },
      token: `JWT ${createToken(user)}`,
    });
  } catch (e) {
    return res.status(400).json({ error: true, errorMessage: e.message });
  }
};

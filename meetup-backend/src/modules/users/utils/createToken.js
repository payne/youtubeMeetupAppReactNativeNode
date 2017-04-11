import jwt from 'jsonwebtoken';

import config from '../../../config/config';

export function createToken(args) {
  return jwt.sign({ id: args._id }, config.JWT_SECRET);
}

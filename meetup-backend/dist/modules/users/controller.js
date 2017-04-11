'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithAuth0 = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _googleAuth = require('./utils/googleAuth');

var _facebookAuth = require('./utils/facebookAuth');

var _createToken = require('./utils/createToken');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loginWithAuth0 = exports.loginWithAuth0 = async (req, res) => {
  const { provider, token } = req.body;
  let userInfo;

  if (provider === 'google') {
    try {
      userInfo = await (0, _googleAuth.googleAuth)(token);
    } catch (e) {
      return res.status(400).json({ error: true, message: 'Something wrong happen!' });
    }
  } else {
    try {
      userInfo = await (0, _facebookAuth.facebookAuth)(token);
    } catch (e) {
      return res.status(400).json({ error: true, message: 'Something wrong happen!' });
    }
  }

  try {
    const user = await _model2.default.findOrCreate(userInfo);
    return res.status(200).json({
      success: true,
      user: {
        id: user._id
      },
      token: `JWT ${(0, _createToken.createToken)(user)}`
    });
  } catch (e) {
    return res.status(400).json({ error: true, errorMessage: e.message });
  }
};
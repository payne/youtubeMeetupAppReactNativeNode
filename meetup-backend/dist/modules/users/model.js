'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
  fullName: String,
  avatar: String,
  email: {
    type: String,
    unique: true
  },
  providerData: {
    uid: String,
    provider: String
  }
}, { timestamps: true });

UserSchema.statics.findOrCreate = async function (args) {
  const user = await this.findOne({ email: args.email });

  if (!user) {
    try {
      return await this.create(args);
    } catch (e) {
      return e;
    }
  } else {
    return user;
  }
};

exports.default = _mongoose2.default.model('User', UserSchema);
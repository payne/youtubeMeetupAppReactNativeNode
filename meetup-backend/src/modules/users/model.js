import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  fullName: String,
  avatar: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  providerData: {
    uid: String,
    provider: String,
  },
}, { timestamps: true });

UserSchema.statics.findOrCreateWithAuth0 = async function (args) {
  const user = await this.findOne({
    email: args.email,
    fullName: args.fullName,
  });

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

export default mongoose.model('User', UserSchema);

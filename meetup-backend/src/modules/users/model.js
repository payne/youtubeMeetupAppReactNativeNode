import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  fullName: String,
  avatar: String,
  email: {
    type: String,
    unique: true,
  },
  providerData: {
    uid: String,
    provider: String,
  },
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

export default mongoose.model('User', UserSchema);

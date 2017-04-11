'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GroupSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be 5 characters long']
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description must be 10 characters long']
  },
  category: {
    type: String
  },
  meetups: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Meetup'
  }]
}, { timestamps: true });

/**
 * Create a meetup and add it to the meetups array in the group
 */
GroupSchema.statics.addMeetup = async function (id, args) {
  const Meetup = _mongoose2.default.model('Meetup');
  // We add the group id to the meetup group element
  // Finally this is the author of the meetup
  const meetup = await new Meetup(Object.assign({}, args, { group: id }));
  // We found the group with the id provide in the url
  // And we push the meetup id in the meetups element
  await this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });

  return {
    meetup: await meetup.save()
  };
};

exports.default = _mongoose2.default.model('Group', GroupSchema);
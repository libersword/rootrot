const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema ({
  user: {
    type: Schema.ObjectId, 
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  plantType: {
    type: String
  },
  waterSchedule: {
    type: Number
  },
  daysLeft: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Plant = mongoose.model('plant', PlantSchema);
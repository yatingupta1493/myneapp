const mongoose = require('mongoose');
const schema = mongoose.Schema;

const geoSchema = new schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const ninjaSchema = new schema({
  name: {
    type: String,
    required: [true, 'Name field is required!!']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: geoSchema
});

const ninjaModel = mongoose.model('ninja', ninjaSchema); // ninja is model/collection name

module.exports = ninjaModel;

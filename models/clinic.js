const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  content: {
    type: String,
  },
  time: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Clinic", clinicSchema);

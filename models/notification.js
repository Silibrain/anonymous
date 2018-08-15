const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notification = new Schema({
  type: {type: Number},
  activity: {type: Schema.ObjectId, ref: "activity"},
});

mongoose.model("Notification", notification);

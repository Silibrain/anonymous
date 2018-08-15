const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activityStream: {type: String, default: "", maxlength: 400},
  activityKey:{ type: Schema.ObjectId},
  sender: { type: Schema.ObjectId, ref: "user"},
  receiver: { type: Schema.ObjectId, ref: "user"},
  createdAt: { type: Date, default: Date.now }
});

activitySchema.statics = {
  list: function(options) {
    const criteria = options.criteria || {};
    return this.find(criteria)
      .populate("sender", "name username provider")
      .populate("receiver", "name username provider")
      .sort({ createdAt: -1})
      .limit(options.perPage)
      .skip(options.perPage * options.page);
  }
};



mongoose.model("Activity", activitySchema);

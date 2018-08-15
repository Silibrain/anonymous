const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  message: { type: String, default: "", trim: true, maxlength: 200},
  sender: { type: Schema.ObjectId, ref: "user" },
  receiver: { type: Schema.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now },
});



chatSchema.statics = {
  load: function(options, cb) {
    options.select = options.select || "message sender receiver createdAt";
    return this.findOne(options.criteria).select(options.select).exec(cb);
  },
  list: function (options) {
    const criteria = options.criteria || {};
    return this.find(criteria)
      .populate("sender", "name username github")
      .populate("receiver", "name username github")
      .sort({ createdAt: -1 })
      .limit(options.perPage)
      .skip(options.perPage * options.page);
  }
};

mongoose.model("Chat", chatSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pantry" }],
});

module.exports = mongoose.model("User", UserSchema);

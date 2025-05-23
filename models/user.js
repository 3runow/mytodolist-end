var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    nome: { unique: true, type: String, required: true },
    senha: { type: String, required: true },
    admin: { type: Boolean, default: false }
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", userSchema);

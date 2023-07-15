const mongoose = require("mongoose");

const { Schema } = mongoose;
const { usersSchema } = require("./Users");

const comentsSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
    author: {
      type: usersSchema,
    }
  },
  { timestamps: true }
);

const Coments = mongoose.model("Coments", comentsSchema);

module.exports = Coments
const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    idOauth: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timeStamps: true }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = {
  Users,
  usersSchema,
}
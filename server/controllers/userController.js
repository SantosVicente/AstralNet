const { Users: UserModel } = require("../models/Users");
const ComentsModel = require("../models/Coments");

const userController = {
  create: async (user) => {
    try {
      return await UserModel.create(user);
    } catch (error) {
      console.error(error);
    }
  },
  getAll: async () => {
    try {
      return await UserModel.find();
    } catch (error) {
      console.error(error);
    }
  },
  get: async (id) => {
    try {
      return await UserModel.findById(id);
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (id) => {
    try {
      return await UserModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
    }
  },
  put: async (id, user) => {
    try {
      return await UserModel.findByIdAndUpdate(id, user);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = userController;

const ComentsModel = require("../models/Coments");

const comentsController = {
  create: async (coment) => {
    try {
      return await ComentsModel.create(coment);
    } catch (error) {
      console.error(error);
    }
  },
  getAll: async () => {
    try {
      return await ComentsModel.find();
    } catch (error) {
      console.error(error);
    }
  },
  get: async (id) => {
    try {
      return await ComentsModel.findById(id);
    } catch (error) {
      console.error(error);
    }
  },
  //fazer uma rota get que pegue todos o comentários de um usuário se necessário, getAllUser: async (req, res) => {...}
  delete: async (id) => {
    try {
      return await ComentsModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
    }
  },
  put: async (id, coments) => {
    try {
      return await ComentsModel.findByIdAndUpdate(id, coments);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = comentsController;

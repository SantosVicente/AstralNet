const { Users: UserModel } = require("../models/Users");
const ComentsModel = require("../models/Coments");

const userController = {
  create: async (req, res) => {
    try {
      const user = {
        idOauth: req.body.idOauth,
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
      };

      if (
        user.idOauth === undefined ||
        user.idOauth === null ||
        user.idOauth === ""
      ) {
        res
          .status(400)
          .json({ msg: "O campo IdOauth é obrigatório na request!" });
        return;
      }

      if (user.name === undefined || user.name === null || user.name === "") {
        res.status(400).json({ msg: "O campo Nome é obrigatório na request!" });
        return;
      }

      if (
        user.email === undefined ||
        user.email === null ||
        user.email === ""
      ) {
        res
          .status(400)
          .json({ msg: "O campo Email é obrigatório na request!" });
        return;
      }

      if (
        user.image === undefined ||
        user.image === null ||
        user.image === ""
      ) {
        user.image = "No image";
      }

      //trocar esta verificação pelo idOauth se necessário
      const existingUser = await UserModel.findOne({ email: user.email });
      if (existingUser) {
        res.status(409).json({ msg: "O email já está em uso!" });
        return;
      }

      const response = await UserModel.create(user);

      if (response !== null && response !== undefined) {
        res.status(201).json({ response, msg: "Usuário criado com sucesso!" });
      } else {
        res.status(400).json({ msg: "Erro ao criar usuário!" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Ocorreu algum erro interno!" });
      console.error(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await UserModel.find();

      res.status(200).json({ data, msg: "Usuários encontrados com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: "Erro ao buscar usuários!" });
      console.error(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;

      if (!id) {
        res
          .status(400)
          .json({ msg: "O campo Id é obrigatório na requisição!" });
        return;
      }

      const data = await UserModel.findById(id);

      if (data !== null && data !== undefined) {
        res.status(200).json({ data, msg: "Usuário encontrado com sucesso!" });
      } else {
        res.status(404).json({ msg: "Usuário não encontrado!" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Ocorreu um erro ao procurar o usuário" });
      console.error(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;

      if (id === null || id === undefined || id === "") {
        res
          .status(400)
          .json({ msg: "O campo ID é necessário para realizar a operação!" });
      }

      const userDelete = await UserModel.findByIdAndDelete(id);

      if (userDelete !== null && userDelete !== undefined) {
        const result = await ComentsModel.deleteMany({ 'author._id': id });
        
        res
          .status(200)
          .json({ userDelete, deletedComents: result.deletedCount, msg: "Usuário deletado com sucesso!" });
      } else {
        res.status(404).json({ msg: "Usuário não encontrado!" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Ocorreu um erro ao deletar o usuário" });
      console.error(error);
    }
  },
  put: async (req, res) => {
    //falta adicionar aqui para que sempre que um USER seja alterado seus dados nos seus comentários também sejam

    try {
      const id = req.params.id;

      if (id === null || id === undefined || id === "") {
        res
          .status(400)
          .json({ msg: "O campo ID é necessário para realizar a operação!" });
      }

      const user = {
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
      };

      if (
        (user.name === undefined || user.name === null || user.name === "") &&
        (user.email === undefined ||
          user.email === null ||
          user.email === "") &&
        (user.image === undefined || user.image === null || user.image === "")
      ) {
        res.status(400).json({
          msg: "É necessário pelo menos um campo para alterar o usuário (Nome, Email ou Imagem)!",
        });
        return;
      }

      const putUser = await UserModel.findByIdAndUpdate(id, user);

      if (putUser !== null && putUser !== undefined) {
        res.status(200).json({ user, msg: "Usuário alterado com sucesso!" });
        return;
      }

      res.status(404).json({ msg: "Usuário não encontrado!" });
    } catch (error) {
      res.status(500).json({ msg: "Ocorreu algum erro interno!" });
      console.error(error);
    }
  },
};

module.exports = userController;

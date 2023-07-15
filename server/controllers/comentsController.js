const ComentsModel = require("../models/Coments");

const comentsController = {
  create: async (req, res) => {
    try {
      const coments = {
        content: req.body.content,
        page: req.body.page,
        author: req.body.author,
      };

      if (
        coments.content === undefined ||
        coments.content === null ||
        coments.content === ""
      ) {
        res
          .status(400)
          .json({ msg: "O campo Conteúdo é obrigatório na request!" });
        return;
      }

      if (
        coments.page === undefined ||
        coments.page === null ||
        coments.page === ""
      ) {
        res
          .status(400)
          .json({ msg: "O campo Página é obrigatório na request!" });
        return;
      }

      if (
        coments.author === undefined ||
        coments.author === null ||
        coments.author === ""
      ) {
        res
          .status(400)
          .json({ msg: "O campo Autor é obrigatório na request!" });
        return;
      }

      const response = await ComentsModel.create(coments);

      res.status(201).json({ response, msg: "Comentário criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: "Erro ao criar comentário!" });
      console.error(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const coments = await ComentsModel.find();

      res.status(200).json(coments);
    } catch (error) {
      res.status(500).json({ msg: "Erro ao buscar comentários!" });
      console.error(error);
    }
  },
  get: async (req, res) => {
    try {
      //id do comentário pela URL (params)
      const id = req.params.id;

      if (id === null || id === undefined || id === "") {
        res
          .status(400)
          .json({ msg: "O campo ID é necessário para realizar a operação!" });
      }

      const coment = await ComentsModel.findById(id);

      if (coment !== null && coment !== undefined) {
        res.status(200).json(coment);
      } else {
        res.status(404).json({ msg: "Comentário não encontrado!" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Ocorreu um erro interno!" });
      console.error(error);
    }
  },
  //fazer uma rota get que pegue todos o comentários de um usuário se necessário, getAllUser: async (req, res) => {...}
  delete: async (req, res) => {
    try {
      //id do comentário pela URL (params)
      const id = req.params.id;

      if (id === null || id === undefined || id === "") {
        res
          .status(400)
          .json({ msg: "O campo ID é necessário para realizar a operação!" });
      }

      const comentDelete = await ComentsModel.findByIdAndDelete(id);

      if (comentDelete !== null && comentDelete !== undefined) {
        res
          .status(200)
          .json({ comentDelete, msg: "Comentário deletado com sucesso!" });
      } else {
        res.status(404).json({ msg: "Comentário não encontrado!" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Ocorreu um erro interno" });
      console.error(error);
    }
  },
  put: async (req, res) => {
    try {
      const id = req.params.id;

      if (id === null || id === undefined || id === "") {
        res
          .status(400)
          .json({ msg: "O campo ID é necessário para realizar a operação!" });
      }

      const coments = {
        content: req.body.content,
      };

      if (
        coments.content === undefined ||
        coments.content === null ||
        coments.content === ""
      ) {
        res.status(400).json({
          msg: "O campo Conteúdo é obrigatório na request!",
        });
        return;
      }

      const putComent = await ComentsModel.findByIdAndUpdate(id, coments);

      if (putComent !== null && putComent !== undefined) {
        res
          .status(200)
          .json({ coments, msg: "Comentário alterado com sucesso!" });
        return;
      }
      res.status(404).json({ msg: "Comentário não encontrado!" });
    } catch (error) {
      res.status(500).json({ msg: "Ocorreu um erro interno!" });
      console.error(error);
    }
  },
};

module.exports = comentsController;

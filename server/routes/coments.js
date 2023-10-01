const router = require("express").Router();

const comentsController = require("../controllers/comentsController");

//functions
router.route("/").post(async (req, res) => {
  try {
    const coments = {
      content: req.body.content ? req.body.content : null,
      page: req.body.page ? req.body.page : null,
      author: req.body.author ? req.body.author : null,
    };

    if (!coments.content) {
      res
        .status(400)
        .json({ msg: "O campo Conteúdo é obrigatório na request!" });
      return;
    }

    if (!coments.page) {
      res.status(400).json({ msg: "O campo Página é obrigatório na request!" });
      return;
    }

    if (!coments.author) {
      res.status(400).json({ msg: "O campo Autor é obrigatório na request!" });
      return;
    }

    await comentsController.create(coments);
    res.status(201).json({ response, msg: "Comentário criado com sucesso!" });
  } catch (e) {
    res.status(500).json({ msg: "Erro ao criar comentário!" });
    console.error(e);
    return;
  }
});

router.route("/").get(async (req, res) => {
  try {
    const data = await comentsController.getAll();

    res.status(200).json({ data, msg: "Comentários encontrados com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao buscar comentários!" });
    console.error(error);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id ? req.params.id : null;

    if (!id) {
      res
        .status(400)
        .json({ msg: "O campo ID é necessário para realizar a operação!" });
    }

    const coment = await comentsController.get(id);

    if (coment !== null && coment !== undefined) {
      res.status(200).json(coment);
    } else {
      res.status(404).json({ msg: "Comentário não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Ocorreu um erro interno!" });
    console.error(error);
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    //id do comentário pela URL (params)
    const id = req.params.id ? req.params.id : null;

    if (!id) {
      res
        .status(400)
        .json({ msg: "O campo ID é necessário para realizar a operação!" });
    }

    const comentDelete = await comentsController.delete(id);

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
});

router.route("/:id").put(async (req, res) => {
  try {
    const id = req.params.id ? req.params.id : null;

    if (!id) {
      res
        .status(400)
        .json({ msg: "O campo ID é necessário para realizar a operação!" });
    }

    const coments = {
      content: req.body.content ? req.body.content : null,
      author: req.body.author ? req.body.author : null,
    };

    if (!coments.content) {
      res.status(400).json({
        msg: "O campo Conteúdo é obrigatório na request!",
      });
      return;
    }

    const putComent = await comentsController.put(id, coments);

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
});

module.exports = router;

const router = require("express").Router();

const comentsController = require("../controllers/comentsController");

//functions
router.route("/").post(async (req, res) => {
    try {
        const coments = {
            content: req.body.content ? req.body.content : null,
            page: req.body.page ? req.body.page : null,
            author: req.body.author ?  req.body.author : null,
        };

        if (!coments.content) {
            res
                .status(400)
                .json({ msg: "O campo Conteúdo é obrigatório na request!" });
            return;
        }

        if (!coments.page) {
            res
                .status(400)
                .json({ msg: "O campo Página é obrigatório na request!" });
            return;
        }

        if (!coments.author) {
            res
                .status(400)
                .json({ msg: "O campo Autor é obrigatório na request!" });
            return;
        }

        await comentsController.create(coments)
        res.status(201).json({ response, msg: "Comentário criado com sucesso!" });

    }
    catch (e) {

      res.status(500).json({ msg: "Erro ao criar comentário!" });
      console.error(e);
      return;
    }
});


router.route("/").get((req, res) => comentsController.getAll(req, res));
router.route("/:id").get((req, res) => comentsController.get(req, res));
router.route("/:id").delete((req, res) => comentsController.delete(req, res));
router.route("/:id").put((req, res) => comentsController.put(req, res));

module.exports = router;
const router = require("express").Router();
const { Users: UserModel } = require("../models/Users");
const ComentsModel = require("../models/Coments");

const userController = require("../controllers/userController");

//functions
router.route("/").post(async (req, res) => {
  try {
    const user = {
      idOauth: req.body.idOauth ? req.body.idOauth : null,
      name: req.body.name ? req.body.name : null,
      email: req.body.email ? req.body.email : null,
      image: req.body.image ? req.body.image : "No image",
    };

    if (!user.idOauth) {
      res
        .status(400)
        .json({ msg: "O campo IdOauth é obrigatório na request!" });
      return;
    }

    if (!user.name) {
      res.status(400).json({ msg: "O campo Nome é obrigatório na request!" });
      return;
    }

    if (!user.email) {
      res.status(400).json({ msg: "O campo Email é obrigatório na request!" });
      return;
    }

    //trocar esta verificação pelo idOauth se necessário
    const existingUser = await UserModel.findOne({ email: user.email });
    if (existingUser) {
      res.status(409).json({ msg: "O email já está em uso!" });
      return;
    }

    const response = await userController.create(user);

    if (response !== null && response !== undefined) {
      res.status(201).json({ response, msg: "Usuário criado com sucesso!" });
    } else {
      res.status(400).json({ msg: "Erro ao criar usuário!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Ocorreu algum erro interno!" });
    console.error(error);
  }
});

router.route("/").get(async (req, res) => {
  try {
    const data = await userController.getAll();

    res.status(200).json({ data, msg: "Usuários encontrados com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao buscar usuários!" });
    console.error(error);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id ? req.params.id : null;

    if (!id) {
      res.status(400).json({ msg: "O campo Id é obrigatório na requisição!" });
      return;
    }

    const data = await userController.get(id);

    if (data !== null && data !== undefined) {
      res.status(200).json({ data, msg: "Usuário encontrado com sucesso!" });
    } else {
      res.status(404).json({ msg: "Usuário não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Ocorreu um erro ao procurar o usuário" });
    console.error(error);
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    const id = req.params.id ? req.params.id : null;

    if (!id) {
      res
        .status(400)
        .json({ msg: "O campo ID é necessário para realizar a operação!" });
    }

    const userDelete = await userController.delete(id);

    if (userDelete !== null && userDelete !== undefined) {
      const result = await ComentsModel.deleteMany({ "author._id": id });

      res.status(200).json({
        userDelete,
        deletedComents: result.deletedCount,
        msg: "Usuário deletado com sucesso!",
      });

      return;
    } else {
      res.status(404).json({ msg: "Usuário não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Ocorreu um erro ao deletar o usuário" });
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

    let user;

    if (req.body.name && req.body.email && req.body.image) {
      user = {
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
      };
    } else if (req.body.name && req.body.email) {
      user = {
        name: req.body.name,
        email: req.body.email,
      };
    } else if (req.body.name && req.body.image) {
      user = {
        name: req.body.name,
        image: req.body.image,
      };
    } else if (req.body.email && req.body.image) {
      user = {
        email: req.body.email,
        image: req.body.image,
      };
    } else if (req.body.name) {
      user = {
        name: req.body.name,
      };
    } else if (req.body.email) {
      user = {
        email: req.body.email,
      };
    } else if (req.body.image) {
      user = {
        image: req.body.image,
      };
    }

    if (!user.name && !user.email && !user.image) {
      res.status(400).json({
        msg: "É necessário pelo menos um campo para alterar o usuário (Nome, Email ou Imagem)!",
      });
      return;
    }

    const putUser = await userController.put(id, user);

    if (putUser !== null && putUser !== undefined) {
      let result;

      if (user.name && user.email && user.image) {
        result = await ComentsModel.updateMany(
          { "author._id": id },
          {
            "author.name": user.name,
            "author.email": user.email,
            "author.image": user.image,
          }
        );
      } else if (user.name && user.email) {
        result = await ComentsModel.updateMany(
          { "author._id": id },
          {
            "author.name": user.name,
            "author.email": user.email,
          }
        );
      } else if (user.name && user.image) {
        result = await ComentsModel.updateMany(
          { "author._id": id },
          {
            "author.name": user.name,
            "author.image": user.image,
          }
        );
      } else if (user.email && user.image) {
        result = await ComentsModel.updateMany(
          { "author._id": id },
          {
            "author.email": user.email,
            "author.image": user.image,
          }
        );
      } else if (user.name) {
        result = await ComentsModel.updateMany(
          { "author._id": id },
          {
            "author.name": user.name,
          }
        );
      } else if (user.email) {
        result = await ComentsModel.updateMany(
          { "author._id": id },
          {
            "author.email": user.email,
          }
        );
      } else if (user.image) {
        result = await ComentsModel.updateMany(
          { "author._id": id },
          {
            "author.image": user.image,
          }
        );
      }

      res
        .status(200)
        .json({ user, result, msg: "Usuário alterado com sucesso!" });
      return;
    }

    res.status(404).json({ msg: "Usuário não encontrado!" });
  } catch (error) {
    res.status(500).json({ msg: "Ocorreu algum erro interno!" });
    console.error(error);
  }
});

module.exports = router;

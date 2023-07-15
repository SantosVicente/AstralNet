const router = require("express").Router();

const comentsController = require("../controllers/comentsController");

//functions
router.route("/coments").post((req, res) => comentsController.create(req, res));
router.route("/coments").get((req, res) => comentsController.getAll(req, res));
router.route("/coments/:id").get((req, res) => comentsController.get(req, res));
router.route("/coments/:id").delete((req, res) => comentsController.delete(req, res));
router.route("/coments/:id").put((req, res) => comentsController.put(req, res));

module.exports = router;
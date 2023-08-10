const router = require("express").Router();

const userController = require("../controllers/userController");

//functions
router.route("/users").post((req, res) => userController.create(req, res));
router.route("/users").get((req, res) => userController.getAll(req, res));
router.route("/users/:id").get((req, res) => userController.get(req, res));
router.route("/users/:id").delete((req, res) => userController.delete(req, res));
router.route("/users/:id").put((req, res) => userController.put(req, res));

module.exports = router;
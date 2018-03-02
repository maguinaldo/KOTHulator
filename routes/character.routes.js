const router = require("express").Router();
const characterController = require("../controllers/character.controller");

module.exports = router

router.get("/", characterController.readAll);
router.post("/create", characterController.create);
router.delete("/delete", characterController.deleteEntry);
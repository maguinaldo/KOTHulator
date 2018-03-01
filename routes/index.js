const router = require("express").Router();
const character = require("./character.routes")

module.exports = router;

router.use("/api/character", character);
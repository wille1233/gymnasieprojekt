const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController.js");

router.get("/", indexController.view);

router.post("/check", indexController.check);

module.exports = router;
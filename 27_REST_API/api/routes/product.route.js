var express = require("express");
var router = express.Router();

//MVC model - view - controller
var controller = require("../controllers/product.controller");

router.get("/", controller.index);
router.post('/', controller.create);

module.exports = router;
const express = require("express");

const router = express.Router();
const user = require("../controller/userController");
const category = require("../controller/categoryController");
const recipe = require("../controller/recipeController");
const auth = require("../middleware/auth");
const {registerValidation, loginValidation} = require("../util/validation");

// const router = express.Router();

router.post('/register', registerValidation,user.register);
router.post('/login', loginValidation,user.login);

router.post("/category/create", auth, category.create);
router.get("/category", auth, category.all);
router.post("/recipe/create", auth, recipe.create);
router.get("/recipe/", auth, recipe.all);

module.exports = router;
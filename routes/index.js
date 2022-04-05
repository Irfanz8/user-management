const express = require("express");

const router = express.Router();
const user = require("../controller/userController");
const page = require("../controller/pageController");
const auth = require("../middleware/auth");

// const router = express.Router();

router.post('/register', user.register);
router.post('/login', user.login);

router.get("/welcome", auth, page.welcome);
router.get("/user", auth, page.user);

module.exports = router;
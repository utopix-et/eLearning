const express = require("express");
const router = express.Router();

const userRoutes = require("../resources/users/routes");
const courseRoutes = require("../resources/courses/routes");
router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
module.exports = router;
